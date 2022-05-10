import Image from "next/image";
import {useSession } from "next-auth/react";
import {EmojiHappyIcon } from "@heroicons/react/outline";
import {CameraIcon,VideoCameraIcon} from "@heroicons/react/solid";
import {useRef, useState} from "react";
import {db,storage } from '../firebase';
import { uploadBytesResumable, getDownloadURL, uploadBytes,ref  } from "firebase/storage";
import{collection, addDoc, serverTimestamp, doc, updateDoc} from "firebase/firestore";
import { v4 } from "uuid";


function InputBox(){

    const { data: session, status } = useSession();

 const inputRef = useRef(null);
 const filepickerRef = useRef(null);

 const [imageToPost, setImageToPost] = useState(null);


// for normal text
const sendPost = async (e) => {
    e.preventDefault();
    if (!inputRef.current.value && !imageToPost == null) return;

    const collectionRef = collection(db, "posts");

    await addDoc(collectionRef, {
      message: inputRef.current.value,
      name: session.user.name,
      image: session.user.image,
      email: session.user.email,
      timeStamp: serverTimestamp(),
    }).then((currDoc) => {
        if (imageToPost) {
          const currentPost = doc(db, "posts", currDoc.id);
          const imageRef = ref(
            storage,
            `images/uploads/${imageToPost.name + v4()}`
          );
          uploadBytes(imageRef, imageToPost).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
              updateDoc(currentPost, { image: url });
            });
          });
        }
      });


    alert("Post created")
    inputRef.current.value="";
  };

  const uploadFile = (e) => {
    e.preventDefault();
    console.log("uplaoding file");
    if (imageToPost == null) return;
    const imageRef = ref(storage, `images/uploads/${imageToPost.name + v4()}`);
    uploadBytes(imageRef, imageToPost).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
    
      });
    });
  };

//   add to image
// to view img be4post
const addImageToPost = async (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

const removeImage = () => {
setImageToPost(null)
};

    return(
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex  space-x-4 p-4 items-center">
          <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
          />
          <form className="flex flex-1">
              <input
              className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
               type="text" 
               ref={inputRef}
              placeholder={`Whats on your mind ${session.user.name}?`} />


    <button onClick={sendPost} hidden type="submit">Submit</button>
    {imageToPost && (
            <div
              className="flex rounded flex-col items-center filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
              onClick={removeImage}
            >
              <img
                src={imageToPost}
                className="object-contain h-10"
                width={40}
                height={40}
              />
              <p className="text-xs text-red-300">Remove</p>
            </div>
          )}
          </form>



      </div>

      <div className="flex justify-evenly p-3 border-t">
      <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500 "/>
          <p className="text-xs sm:text-sm xl:text-base ">Live Video</p>
      </div>

      <div onClick={()=> filepickerRef.current.click()} className="inputIcon">
       <CameraIcon className="h-7 text-green-400"/>
       <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
       <input ref={filepickerRef} onChange={(e) =>{  setImageToPost(e.target.files[0])}} type="file" hidden/>

      </div>
      <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300"/>
          <p className="text-xs sm:text-sm xl:text-base" >Feeling/Activity</p>
      </div>

      </div>
        </div>
    )
}

export default InputBox;