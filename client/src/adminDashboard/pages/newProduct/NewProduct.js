import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification,message, Progress,  Upload, Button, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { createProduct } from "../../../actions/productActions";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { getStorage, ref, uploadBytes , uploadBytesResumable, getDownloadURL} from "firebase/storage";
import "./newProduct.css";
import app from "../../../firbase";
import Message from "../../../Components/message/Message";
import Loader from "../../../Components/loader/Loader";
import { async } from "@firebase/util";
import { IconButton } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";


 const NewProduct = () => {
   const [uploadProgress, setUploadProgress] = useState(0)
    const  [inputs, setInputs] = useState({})
    // const  [category, setCategory] = useState()
    const [size, setSize] = useState([])
    const [color, setColor] = useState([])
    const [file, setFile] = useState([])
    const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);
    const [main, setMain] = useState(null);
    const [fileFront, setFileFront] = useState(null)
    const [fileBack, setFileBack] = useState(null)
    

    const fileList = [];
  


    const warning = (info) => {
      message.warning(info);
    };
  
    const successMsg = () => {
      message.success('Upload is running');
    };  
   

  const dispatch = useDispatch()
  const productCreate = useSelector((state) => state.productCreate)

  const {loading, success, product}= productCreate


  const handleChange = (e) => {
    e.preventDefault()
    setInputs(prev => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }
  const handleImgChange = (e) => {

    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  }
  const handleColors = (e) => {
    e.preventDefault()
    setColor(e.target.value.split(','))
  }
  const handleSizes = (e) => {
    e.preventDefault()
    setSize(e.target.value.split(','))
  }


  const handleCreate = (e) => {
    
    e.preventDefault()
    const urlList = [];
    const warning = (info) => {
      message.warning(info);
    };

  const success = () => {
    message.success('Upload is running');
  };
  // todo
  // unique identifier for firebase = jposh-4046b
  // create a unique file name for the images
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
  
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
              const product = {...inputs, size, color, img: urlList[0], frontImg: urlList[1], backImg: urlList[2]};
              dispatch(createProduct(product))
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

useEffect(() => {
  const openNotificationWithIcon = (type, placement,) => {
    // open notification
    notification[type]({
        message: 'SUCCCESS',
        duration: 1,
        description:
        'Product created successfully!',
      });   
  }
  
  success && openNotificationWithIcon('success', 'top') 
}, [success])
// onChange={(e) => setFile(e.target.files[0])}

  return (
    <div>
      {
        loading && <Loader />
      }
      <main className="newProduct-container">
        <Sidebar />
      <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <div className="upload-box">
       <Progress percent={uploadProgress} status="active" />
      </div>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image | Front Image | Back Image</label>
          <input type="file" id="file"  onChange={handleImgChange}  accept="image/png , image/jpeg, image/webp" required/>
         
        </div>
        <div className="addProductItem">
          <label>Name (Name you want to give the new product)</label>
          <input type="text" placeholder="Product Name" name='title' onChange={handleChange} required/>
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="number" placeholder="Product Price" name='price' onChange={handleChange} required/>
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input type="text" placeholder="Video URL (youtube or instagram link)" name='video' onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>In Stock</label>
          <select name="inStock" onChange={handleChange} required>
            <option>choose an option</option>
            <option value='true'>Yes</option>
            <option value='false'>No</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Number in Stock</label>
          <input type="text" placeholder=" number in stock" name='countInStock' onChange={handleChange} required/>
        </div>
        <div className="addProductItem" >
          <label>Discount</label>
          <select name="discount" onChange={handleChange} required>
            <option>choose an option</option>
            <option value='true'>Yes</option>
            <option value='false'>No</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Discount Price</label>
          <input type="number" placeholder="Product Discount Price" name='discoutPrice' onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Category (What category would you like this product to appear under)</label>
          <select name='category' onChange={handleChange} required>
            <option>choose an option</option>
            <option value='women'>Women </option>
            <option value='men'>Men</option>
            <option value='accessories'>Accessries</option>
            <option value='track-suits'>Track suits</option>
            <option value='fabrics'>Fabrics</option>
            <option value='adireBubu-dress'>Adire/Bubu dress</option>
            <option value='ankara-set'>Ankara set</option>
            <option value='children'>Children</option>
            <option value='2pieces-set'>2pieces set</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <textarea name="desc" rows="30" cols="100" maxlength="550" placeholder="Product Description" onChange={handleChange} required></textarea>
        </div>
        <div className="addProductItem">
          <label>Size</label>
          <input type="text"  placeholder="XL, L, M..." onChange={handleSizes} required/>
        </div>
        <div className="addProductItem">
          <label>color</label>
          <input type="text" placeholder="Red, Blue, Green ..."  onChange={handleColors} required/>
        </div>
        <button className="addProductButton" onClick={handleCreate}>Create</button>
      </form>
    </div>
      </main>
    </div>
  );
}

export default NewProduct
