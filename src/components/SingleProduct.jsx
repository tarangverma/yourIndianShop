import React, { useContext, useEffect, useState } from "react";
import "../stylesheet/SingleProduct.scss"; // Import your CSS file
import { MyContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import { fetchreq, walletTransaction } from "../Helper/fetch";
const product = {
  name: "Sample Product",
  price: 19.99,
  description:
    "Our worth added administrations guarantee the progression of products proceeds consistently and supply chains stay lean and streamlined for progress.",
  images: [
    "https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/shipping/btt2.webp",
    "https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/shipping/btt3.webp",
    "https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/shipping/btt4.webp",
  ],
};
const SingleProduct = () => {
  const {wd,setDid,isLogin,user,wh,setUser}=useContext(MyContext);
  const url = process.env.REACT_APP_URL;
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDispach,setIsdispach]=useState(true);
  const [pland,setPland]=useState(null);
  // Initialize state to manage the selected image
  const [photos,setPhotos]=useState([]);
  // const Time = wd.time.split("T");
  const nav = useNavigate()

  const date = new Date(wd?.time);
  const utcDate = new Date(date.getTime());
  const indianDate = utcDate.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata"
  });
  // Handle image selection
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  // const [quantity, setQuantity] = useState(1);
  const status = wd?.status==0?"In WareHouse":"Dispached"

  // const handleIncrement = () => {
  //   setQuantity(quantity + 1);
  // };

  // const handleDecrement = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // };
  const navigatesipment = ()=>{
    setDid(wd?.Did);
    setTimeout(() => {
      nav("/dashboard/shipment")
    }, 500);
  }
  const returnReq = async ()=>{
    console.log(wh?.Wid);
    if(await walletTransaction(pland?.package_ret,wh?.Wid,"Return Request",user,setUser,nav)){
      const rt = await fetchreq("GET",`returnReq/${wd?.Did}`,{});
      if(rt){
        alert("request Mad Successfully");
        setIsdispach(true);
      }else{
        alert("something Went Wrong...");
      }
    }
  }
  const loadReqdata =async ()=>{
    const dt = await fetchreq("GET",`checkDispcah/${wd.Did}`,{});
    const dt2 = await fetchreq("GET",`checkReturn/${wd.Did}`,{});
    if(dt && dt2){
      if(parseInt(dt.result[0].num)==0 && parseInt(dt2?.result[0].num)==0){
        const dt = await fetchreq("GET",`getPlan/${user?.Cid}/${wh?.Wid}`,{});
        dt? setPland(dt.result[0]) : setPland(null);
        setIsdispach(false);
      }else{
        setIsdispach(true);
      }
    }
  }
  useEffect(()=>{
    if(isLogin){
      const pt = JSON.parse(wd?.photos);
      let photos = [];
      pt.forEach(element => {
        photos.push(`${url}/${element}`);
      });
      setSelectedImage(photos[0])
      setPhotos(photos)
      loadReqdata()
    }else{
      nav("/");
    }
  },[])
  return (
    <>
    <center >
        <div className="plan-page-title" >
          <span id="org">{wd?.productName}</span>
        </div>
    </center>
      <div id="single-product">
        {/* <Link style={{position:'absolute',top:'0',scale:'2'}} to={"/warehousedata"}>🔙</Link> */}
        <div className="product-images">
          <div className="big-image">
            <img src={selectedImage} alt={wd?.ProductName} />
          </div>  
        </div>
        <div className="product-details">
          <div id="pd-t">
            <h1>{wd?.name}</h1>
            {/* <p className="price">${wd.price}</p> */}
            <p className="description">Desc: {wd?.Description}</p>
            <p className="description">Wight: {wd?.Weight}</p>
            <p className="description">Length: {wd?.length}</p>
            <p className="description">Width: {wd?.width}</p>
            <p className="description">Higth: {wd?.height}</p>
            <p className="description">LokerId: {wd?.LokerId}</p>
            <p className="description">Recive Time: {indianDate}</p>
            <p className="description">Status: {status}</p>

            {!isDispach && <div className="row">
              <button onClick={navigatesipment} className="btn btn-o">Dispach Now</button>
              <button onClick={returnReq} className="btn btn-o">Return ₹{pland?.package_ret}</button>
            </div>}
            <button className="description" onClick={()=>{
              setSelectedImage(`${url}/${wd.proof}`);
            }}>View Proof</button>
          </div>
          <div className="small-images">
            {photos.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={wd.name}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
    
  );
};

export default SingleProduct;
