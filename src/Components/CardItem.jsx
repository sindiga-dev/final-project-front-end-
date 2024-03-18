import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";

export default function CardItem({ user, data,setBook }) {
  const [nanny, setCaregiver] = useState({});
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [images, setImages] = useState({});
  const [status, setStatus] = useState(null);
  const [location, setLocation] = useState({});

  console.log(id)
  useEffect(() => {
    fetch(`https://bbcare.onrender.com/caregivers/${id}`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setCaregiver(data);
        setReviews(data.reviews);
        setImages(data.image);
        setStatus(data.is_booked);
        setLocation(data.location);
      });
  }, []);

  console.log(reviews)
  const r = reviews.map((rating) => rating.ratings);

  return (
    <>
      <Card
        setBook={setBook}
        nanny={nanny}
        r={r}
        images={images}
        status={status}
        user={user}
        data={data}
        location={location}
      />
    </>
  );
}
