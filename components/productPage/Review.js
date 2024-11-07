import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reRender } from "../../reducers/cart";
import { useRouter } from "next/router";

export default function Review({ product }) {
  const user = useSelector((state) => state.user.value);
  const router = useRouter();


  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");
  const [etoile, setEtoile] = useState(0);
  const [avis, setAvis] = useState([]);

  useEffect(() => {
    console.log(product);

    // récupérer les données des produits au montage du composant.
    product &&
      product._id &&
      fetch(`http://localhost:3000/polos/getOne/${product._id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          setAvis(data.polos.comments);
        });
  }, [product._id]);

  const handleClick = () => {
    fetch(`http://localhost:3000/reviews/post/${user.token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        titre: title,
        message: msg,
        note: etoile,
        id: product._id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setAvis([data.newReview, ...avis]);
        setTitle("");
        setEtoile(0);
        setMsg("");
        dispatch(reRender());
      })
      .catch((error) => console.error("Error:", error));
  };

    // Personal note
    const personalStars = [];
    for (let i = 0; i < 5; i++) {
      if (i < etoile) {
        personalStars.push(<svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 cursor-pointer"
          viewBox="0 0 20 20"
          fill="#6DADEE"
          stroke="#010203"
          onClick={() => setEtoile(i + 1)}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>)
      } else {
        personalStars.push(<svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 cursor-pointer hover:fill-[#6DADEE]"
          viewBox="0 0 20 20"
          fill="#C8E0F9"
          stroke="#010203"
          onClick={() => setEtoile(i + 1)}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>)
      }
    }

  const commentaire = avis?.map((review, i) => {

      // note des reviews
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < review.note ) {
      stars.push(<svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5"
        viewBox="0 0 20 20"
        fill="#6DADEE"
        stroke="#010203"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>)
    } else {
    stars.push(<svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-5"
      viewBox="0 0 20 20"
      fill="#C8E0F9"
      stroke="#010203"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>);
    }}

    return (
      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm w-[400px] sm:p-8">
        <div className="flex items-center gap-4">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            className="size-14 rounded-full object-cover"
          />

          <div>
            <div className="flex justify-center gap-0.5 text-green-500">
              {stars}
            </div>

            <p className="mt-0.5 text-lg font-bold text-gray-900">
              @{review?.user || "Anonyme"}
            </p>
          </div>
        </div>
        <div>
          <h1 className="pt-5 font-semibold">{review?.titre}</h1>
          <p className="mt-10 text-gray-700">{review?.message}</p>
        </div>
      </blockquote>
    );
  });

  return (
    <div className="flex gap-10 mx-8 my-12 overflow-hidden">
      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm w-[400px] sm:p-8">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl items-center">Create A Review</h1>
          <div>
            <div className="flex  gap-0.5 ">
            {personalStars}
            </div>
          </div>
        </div>
        <div>
          <input
            placeholder="TITLE"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="mt-5 px-4 font-semibold w-full"
          ></input>
          <textarea
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
            className="mt-3 mb-5 text-gray-700 w-full py-2 px-2 h-20"
            placeholder="YOUR REVIEW"
          ></textarea>
          <button
            onClick={() => handleClick()}
            className="block w-full rounded bg-[#001021] px-3 py-2 text-sm font-medium text-stone-100 transition hover:scale-105"
          >
            Add Review
          </button>
        </div>
      </blockquote>
      {commentaire}
    </div>
  );
}
