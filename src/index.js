import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import usersRequest from "./js/usersRequest";
import makeMarkup from "./js/makeMarkup";

const  lightbox = new SimpleLightbox('.gallery .user-image');

const refs = {
  form: document.querySelector('.search-form'),
  deleteButton: document.querySelector('.delete-button'),
  gallery: document.querySelector('.gallery'),
}

const usersStorage = [];
const storageKey = 'users';

refs.form.addEventListener('submit', submitHandler);
refs.deleteButton.addEventListener('click', deleteHandler);
const usersData = localStorage.getItem(storageKey);

if (usersData) {
  const usersDataParse = JSON.parse(usersData);
  usersDataParse.map(user => makeMarkup(user));
  refs.deleteButton.classList.remove('hidden');
}

function submitHandler(event) {
  event.preventDefault();
  
  usersRequest()
    .then(user => {
      makeMarkup(user);
      lightbox.refresh();
      refs.deleteButton.classList.remove("hidden");
      usersStorage.push(user);
      localStorage.setItem(storageKey, JSON.stringify(usersStorage));
    })
    .catch(error => {
      Notify.failure(error.message);
    });
}

function deleteHandler() {
  refs.gallery.innerHTML = '';
  refs.deleteButton.classList.add("hidden");
  localStorage.removeItem(storageKey);
}