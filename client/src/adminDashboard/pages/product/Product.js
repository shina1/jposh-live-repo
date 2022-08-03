import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails, updateProduct } from "../../../actions/productActions";
import { getStorage, ref, uploadBytes , uploadBytesResumable, getDownloadURL} from "firebase/storage";
import app from "../../../firbase";
import Message from "../../../Components/message/Message";
import Loader from "../../../Components/loader/Loader";

 const DashProduct = () => {
     const params = useParams()
     const [uploadProgress, setUploadProgress] = useState(0)
     const [urls, setUrls] = useState([]);
     const  [inputs, setInputs] = useState({})
     const [size, setSize] = useState([])
     const [color, setColor] = useState([])
     const [images, setImages] = useState([]);
     const dispatch = useDispatch()

     const productId = params.productId;
     const productDetails = useSelector((state) => state.productDetails)
     const productUpdate = useSelector((state) => state.productUpdate)
    const{loading, product} =  productDetails

    console.log('this are the product details',product);

    const [file, setFile] = useState(null)

    const handleChange = (e) => {
        e.preventDefault()
        setInputs(prev => {
          return {...prev, [e.target.name]: e.target.value}
        })
      }

      const handleColors = (e) => {
        e.preventDefault()
        setColor(product.color || e.target.value.split(','))
      }
      const handleSizes = (e) => {
        e.preventDefault()
        setSize(product.size || e.target.value.split(','))
      }

      const handleImgChange = (e) => {

        for (let i = 0; i < e.target.files.length; i++) {
          const newImage = e.target.files[i];
          newImage["id"] = Math.random();
          setImages((prevState) => [...prevState, newImage]);
        }
      }
     useEffect(() => {
         dispatch(listProductDetails(productId))
     }, [dispatch, productId])


     const handleUpdate = (e) => {
        e.preventDefault()
        // todo
        // unique identifier for firebase = jposh-4046b
        // create a unique file name for the images
        e.preventDefault()
        const urlList = [];
        const warning = (info) => {
          // message.warning(info);
        };
    
      const success = () => {
        // message.success('Upload is running');
        console.log('Upload is running');
      };
      // todo
      // unique identifier for firebase = jposh-4046b
      // create a unique file name for the images
        const storage = getStorage(app);
        // const fileName = new Date().getTime() + file.name;
      
      images.forEach((image) => {
        
        const storageRef = ref(storage, `/images/${new Date().getTime() + image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);
    
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
              setUploadProgress(progress)
            console.log(`Upload is ${progress}% done`);
            switch (snapshot.state) {
              case 'paused':
                warning()
                console.log('Upload is paused');
                break;
              case 'running':
                success()
                console.log('Upload is running');
                break;
            }
          },
          (error) => {
            if(error){
              Message('error', 'file upload failed')
            }
            console.log(error);
          },
          () => {
            console.log(`Upload  is complete, fetching URL...`);
            getDownloadURL(storageRef)
              .then((url) => {
                setUrls((prevState) => [...prevState, url]);
                urlList.push(url)
                if(urlList.length === 3){
                  const product = {...inputs, size, color, img: product.img || urlList[0], frontImg: product.frontImg || urlList[1], backImg: product.backImg || urlList[2]};
                  dispatch(updateProduct(product, productId))
                }
              })
              .catch((error) => {
                if(error){
                  Message('error', 'file upload failed')
                }
                console.log(error);
              });
          }
        );
      });  
      }

      

  return (
   <div>
     {
       loading && <Loader />
     }
       <main className="product-dash-container">
           <Sidebar />
       <div className="dash-product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              {/* <Chart data={productData} dataKey="Sales" title="Sales Performance"/> */}
              {
                product ? <div className="productInfoItem">
                <span className="productInfoKey">Description: </span>
                <p className="productInfoValue"> {product.desc}</p>
                </div>
                          :
                <div className="loader-box">
                    <Loader />
                </div>
              }
          </div>
        
            <div className="productTopRight" >
                  {
                    product ? <div className="productInfoTop">
                    <img src={product.img} alt="" className="productInfoImg" />
                    <span className="productInfoValue">{product.title}</span>
                    </div> :
                      <div className="loader-box">
                          <Loader />
                      </div>
                  }
                 {
                   product ?
                   <div className="productInfoBottom">
                   <div className="productInfoItem">
                       <span className="productInfoKey">id: </span>
                       <span className="productInfoValue"> {productId}</span>
                   </div>
                   {/* <div className="productInfoItem">
                       <span className="productInfoKey">name:</span>
                       <span className="productInfoValue">{product.title}</span>
                   </div> */}
                   {/* <div className="productInfoItem">
                       <span className="productInfoKey">description:</span>
                       <span className="productInfoValue">{product.desc}</span>
                   </div> */}
                   <div className="productInfoItem">
                       <span className="productInfoKey">price:</span>
                       <span className="productInfoValue">£ {product.price}</span>
                   </div>
                   <div className="productInfoItem">
                       <span className="productInfoKey">discount:</span>
                       <span className="productInfoValue">{product.discount ? "true" : "false"}</span>
                   </div>
                   <div className="productInfoItem">
                       <span className="productInfoKey">in stock:</span>
                       <span className="productInfoValue">{product.inStock ? "true" : "false"}</span>
                   </div>
               </div>
               :
               <div className="loader-box">
                       <Loader />
               </div>
                 }
            </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  
                  <input type="text" placeholder="Product name" name="title"  onChange={handleChange}/>
                  
                  <input type="text" placeholder="Product Price" name="price" onChange={handleChange}/>

                  <textarea name="desc" rows="10" cols="50" maxlength="150" placeholder="Product Description" onChange={handleChange}></textarea>

                  <input type="text" placeholder="Product Category" name='category' onChange={handleChange}/>

                  <input type="text"  placeholder="XL, L, M..." onChange={handleSizes} />

                  <input type="text" placeholder="Red, Blue, Green ..."  onChange={handleColors} />

                  <label>In Stock</label>
                  <select name="inStock" id="idStock" onChange={handleChange}>
                      <option value="true">choose an option</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                  </select>
                  {/* <label>Discount</label>
                  <select name="discount" id="active">
                      <option value="true">choose an option</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                  </select> */}
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={product.img} alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file"  onChange={handleImgChange}  accept="image/png , image/jpeg, image/webp"/>
                  </div>
                  <button className="productButton" onClick={handleUpdate}>Update</button>
              </div>
          </form>
      </div>
    </div>
       </main>
   </div>
  );
}

export default DashProduct
