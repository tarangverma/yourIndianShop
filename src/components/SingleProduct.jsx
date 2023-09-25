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
  const nav = useNavigate();
  const [isdp,setIsdp]=useState(false);
  const [isrp,setIsrp]=useState(false);

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
  const s1 = ["In WareHouse","Dispached Request in Procedure","Return Request In Procedure","Dispached","Returned"];
  const status = s1[wd?.status];       

  // const handleIncrement = () => {
  //   setQuantity(quantity + 1);
  // };

  // const handleDecrement = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // };
  const navigatesipment =async ()=>{
    setIsdp(true);
    const dt = await fetchreq("GET",`getPayableAmount/${wd?.Did}`,{});
    // console.log(dt)
    if(dt && dt.result[0].amount==0){
      setDid(wd?.Did);
      setTimeout(() => {
        nav("/dashboard/shipment");
      }, 500);
    }else{
      alert("Your bill Is pending First Complete Payment...");
      nav("/Billing");
    }
    setIsdp(false);
  }
  const returnReq = async ()=>{
    if(await window.confirm("Are you Sure to return this Item?")){
      setIsrp(true);
      const dt = await fetchreq("GET",`getPayableAmount/${wd?.Did}`,{});
      if(dt && dt.result[0].amount==0){
        if(await walletTransaction(pland?.package_ret,wh?.Wid,"Return Request",user,setUser,nav)){
          const rt = await fetchreq("GET",`returnReq/${wd?.Did}`,{});
          if(rt){
            await fetchreq("GET",`changeBillStatus/${wd?.Did}`,{});
            await fetchreq("GET",`updateWdstatus/${wd?.Did}/2`,{});
            alert("request Mad Successfully");
            setIsdispach(true);
            nav("/ReturnRequests");
          }else{
            alert("something Went Wrong..."); 
          }
        }
      }else{
        alert("Your bill Is pending First Complete Payment...");
        nav("/Billing");
      }
      setIsrp(false)
    }
  }
  const loadReqdata =async ()=>{
    // const dt = await fetchreq("GET",`checkDispcah/${wd.Did}`,{});
    // const dt2 = await fetchreq("GET",`checkReturn/${wd.Did}`,{});
    if(wd?.status==0){
      const dt = await fetchreq("GET",`getPlan/${user?.Cid}/${wh?.Wid}`,{});
      dt? setPland(dt.result[0]) : setPland(null);
      // if(parseInt(dt.result[0].num)==0 && parseInt(dt2?.result[0].num)==0){
      //   setIsdispach(false);
      // }else{
      //   setIsdispach(true);
      // }
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
    <div id="height-of">
      <div id="l-title">
        <div className="plan-page-title">
          <span> ProductId: {wd?.Did} </span>
          <span id="org">{wd?.productName}</span>
        </div>{" "}
        <a
          className="description btn btn-o-1"
          href={`${url}/${wd.proof}`}
          target="_blank"
          rel="noreferrer"
        >
          View Proof
        </a>
      </div>
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

            {wd?.status == 0 && pland && (
              <div className="row">
                <button onClick={navigatesipment} className="btn btn-g">
                  {isdp ? "Processing..." : "Dispach Now"}
                </button>
                <button onClick={returnReq} className="btn btn-r">
                  {isrp
                    ? "Processing"
                    : `Return ${
                        pland?.package_ret == 0 ? "" : pland?.package_ret
                      }`}
                </button>
              </div>
            )}
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
    </div>
  );
};

export default SingleProduct;
