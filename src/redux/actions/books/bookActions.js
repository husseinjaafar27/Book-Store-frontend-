import axios from "axios";
import {
  CREATE_BOOK_FAIL,
  CREATE_BOOK_REQUEST,
  CREATE_BOOK_SUCCESS,
  FETCH_BOOK_FAIL,
  FETCH_BOOK_REQUEST,
  FETCH_BOOK_SUCCESS,
  DELETE_BOOK_FAIL,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_REQUEST,
  BOOK_DETAIL_SUCCESS,
  BOOK_DETAIL_FAIL,
  BOOK_DETAIL_REQUEST,
  BOOK_UPDATE_SUCCESS,
  BOOK_UPDATE_REQUEST,
  BOOK_UPDATE_FAIL,
} from "../actionTypes";

// const ROOT_URL = "https://book-store-backend-q9ak.onrender.com";
// axios.defaults.baseURL = ROOT_URL;

export const createBook = (category, author, title) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: CREATE_BOOK_REQUEST,
        loading: true,
      });
      const { userInfo } = getState().userLogin;

      const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        "https://book-store-backend-q9ak.onrender.com/api/books",
        { category, author, title },
        config
      );

      dispatch({
        type: CREATE_BOOK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_BOOK_FAIL,
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const fetchBooks = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_BOOK_REQUEST,
        loading: true,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        "https://book-store-backend-q9ak.onrender.com/api/books",
        config
      );

      dispatch({
        type: FETCH_BOOK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_BOOK_FAIL,
        error: error.response && error.response.data.message,
      });
    }
  };
};

export const deleteBook = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: DELETE_BOOK_REQUEST,
        loading: true,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.delete(
        `https://book-store-backend-q9ak.onrender.com/api/books/delete/${id}`,
        config
      );
      dispatch({
        type: DELETE_BOOK_SUCCESS,
        payload: data,
      });

      dispatch({
        type: FETCH_BOOK_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: DELETE_BOOK_FAIL,
        loading: false,
        error: error.response && error.response.data.message,
      });
    }
  };
};

//single book
export const fetchBook = (id, bookData) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: BOOK_DETAIL_REQUEST,
        loading: true,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        `https://book-store-backend-q9ak.onrender.com/api/books/${id}`,
        bookData,
        config
      );

      dispatch({
        type: BOOK_DETAIL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BOOK_DETAIL_FAIL,
        error: error.response && error.response.data.message,
      });
    }
  };
};

export const updateBook = (id, bookData) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: BOOK_UPDATE_REQUEST,
        loading: true,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.patch(
        `https://book-store-backend-q9ak.onrender.com/api/books/update/${id}`,
        bookData,
        config
      );
      dispatch({
        type: BOOK_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BOOK_UPDATE_FAIL,
        loading: false,
        error: error.response && error.response.data.message,
      });
    }
  };
};
