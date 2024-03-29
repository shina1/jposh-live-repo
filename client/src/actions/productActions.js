import axios from "axios";
import {PORPULAR_PRODUCT_LIST_FAIL, PORPULAR_PRODUCT_LIST_REQUEST, PORPULAR_PRODUCT_LIST_SUCCESS, PRODUCT_CATEGORY_LIST_FAIL, PRODUCT_CATEGORY_LIST_REQUEST, PRODUCT_CATEGORY_LIST_SUCCESS, PRODUCT_CREATE_FAIL, PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_REVIEW_FAIL, PRODUCT_CREATE_REVIEW_REQUEST, PRODUCT_CREATE_REVIEW_SUCCESS, PRODUCT_CREATE_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_TOP_FAIL, PRODUCT_TOP_REQUEST, PRODUCT_TOP_SUCCESS, PRODUCT_UPDATE_FAIL, PRODUCT_UPDATE_REQUEST, PRODUCT_UPDATE_SUCCESS} from "../constants/productConstants";
import { PRODUCTION_BASE_URL } from "../utils/requestMethods";
import { logout } from "./userActions";

// keyword = '', pageNumber = ''
export const listAllProducts = () => async(dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST})
        const {data} = await axios.get(`${PRODUCTION_BASE_URL}products/`)

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
       dispatch(
       {
        type: PRODUCT_LIST_FAIL,
        payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
       }
       )
    }
}

export const listProductDetails = (id) => async(dispatch) => {
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST})
        const {data} = await axios.get(`${PRODUCTION_BASE_URL}products/find/${id}`)
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload : data,
        })
    } catch (error) {
        dispatch(
            {
             type: PRODUCT_DETAILS_FAIL,
             payload:
             error.response && error.response.data.message
               ? error.response.data.message
               : error.message
            }
            )
    }
}

export const listPorpularProducts = () => async(dispatch) => {
        try {
            dispatch({type: PORPULAR_PRODUCT_LIST_REQUEST})

            const {data} = await axios.get(`${PRODUCTION_BASE_URL}products/porpular`)
            
            dispatch({
                type:  PORPULAR_PRODUCT_LIST_SUCCESS,
                payload: data,
            })
            
        } catch (error) {
            dispatch(
                {
                 type: PORPULAR_PRODUCT_LIST_FAIL,
                 payload:
                 error.response && error.response.data.message
                   ? error.response.data.message
                   : error.message
                }
                )
        }
}

export const listProductByCategory = (category) => async(dispatch) => {
    try {
        dispatch({type: PRODUCT_CATEGORY_LIST_REQUEST})

        const {data} = await axios.get(category ? `${PRODUCTION_BASE_URL}products?category=${category}` : `${PRODUCTION_BASE_URL}products` )


        dispatch({
            type: PRODUCT_CATEGORY_LIST_SUCCESS,
            payload : data,
        })
    } catch (error) {
        dispatch(
            {
             type: PRODUCT_CATEGORY_LIST_FAIL,
             payload:
             error.response && error.response.data.message
               ? error.response.data.message
               : error.message
            }
            )
    }
}

export const createProduct = (product) => async(dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_CREATE_REQUEST,
        })

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers : {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        const { data } = await axios.post(`${PRODUCTION_BASE_URL}products/create`, product, config)
        dispatch({
            type: PRODUCT_CREATE_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
      console.log(error);
        const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: PRODUCT_CREATE_FAIL,
        payload: message,
      })
    }
}

export const updateProduct = (product, productId) => async (dispatch, getState) => {
    try {
        dispatch({type: PRODUCT_UPDATE_REQUEST})
        const {
            userLogin: { userInfo },
          } = getState()

          const config = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${userInfo.token}`,
            },
          }

          const {data} = await axios.put(`${PRODUCTION_BASE_URL}products/edit/${productId}`, product, config)
          dispatch({
              type: PRODUCT_UPDATE_SUCCESS,
              payload: data
          })
          dispatch({
              type: PRODUCT_DETAILS_SUCCESS,
              payload: data
            })

    } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not authorized, token failed') {
          dispatch(logout())
        }
        dispatch({
          type: PRODUCT_UPDATE_FAIL,
          payload: message,
        })
      }
}

export const createProductReview = (productId, review) => async (
    dispatch,
    getState
  ) => {
    try {
      dispatch({
        type: PRODUCT_CREATE_REVIEW_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      await axios.post(`${PRODUCTION_BASE_URL}products/${productId}/reviews`, review, config)
  
      dispatch({
        type: PRODUCT_CREATE_REVIEW_SUCCESS,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: PRODUCT_CREATE_REVIEW_FAIL,
        payload: message,
      })
    }
  }

  export const listTopProducts = () => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_TOP_REQUEST })
  
      const { data } = await axios.get(`${PRODUCTION_BASE_URL}products/top`)
  
      dispatch({
        type: PRODUCT_TOP_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_TOP_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  // localhost:2600/api/v1/products/delete/

  export const deleteProduct = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_DELETE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      await axios.delete(`${PRODUCTION_BASE_URL}products/delete/${id}`, config)
  
      dispatch({
        type: PRODUCT_DELETE_SUCCESS,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: PRODUCT_DELETE_FAIL,
        payload: message,
      })
    }
  }