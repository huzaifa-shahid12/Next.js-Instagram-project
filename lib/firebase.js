// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRIeGtYsnFx2jUzOkRtHvfNDykyKOEZRc",
  authDomain: "social-media-app-3d097.firebaseapp.com",
  projectId: "social-media-app-3d097",
  storageBucket: "social-media-app-3d097.appspot.com",
  messagingSenderId: "613373344799",
  appId: "1:613373344799:web:71b3e1f26fa740958ea92a",
  measurementId: "G-L12R3QZJ53",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, auth };

export async function PostAds(itemInfo) {
  console.log(itemInfo, "<firbase");
  try {
    const { image, description } = itemInfo;
    const storageRef = ref(storage, `images/${image.name}`);
    console.log(storageRef, "storageREF");
    await uploadBytes(storageRef, image);
    const imgUrl = await getDownloadURL(storageRef);
    console.log(imgUrl, "ÏMGURL");
    await addDoc(collection(firestore, "userItem"), {
      description,
      imageURL: imgUrl,
    });

    alert("Post successfully!");
  } catch (e) {
    alert(e.message);
  }
} 

//  ya wala kam bhi kara do 
export async function getingAds() {
  const querySnapshot = await getDocs(collection(firestore, "userItem"));
  const ads = [];
  querySnapshot.forEach((doc) => {
    const ad = doc.data();
    ad.id = doc.id;
    ads.push(ad);
  });
  return ads;
}
