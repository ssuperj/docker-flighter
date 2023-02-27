import { useEffect, useState } from "react";

const Flickr = (props: any) => {
  const [show, setShow] = useState(false);
  const [img, setImg] = useState("");

  const flickrApiKey = "854856240225808378005467c75ea795";
  const numResults = 1;
  const flickrApiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrApiKey}&text=${props.query}&per_page=${numResults}&format=json&nojsoncallback=1`;

  useEffect(() => {
    fetch(flickrApiUrl)
      .then((response) => response.json())
      .then((data) => {
        const photos = data.photos.photo;
        const imageUrls = photos.map(
          (photo: any) => `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
        );
        if (imageUrls.length === 0) {
          setImg(`${process.env.PUBLIC_URL}/images/bg-alterplane-normal.jpg`);
        } else {
          setImg(imageUrls);
        }
        setShow(true);
      })
      .catch((error) => console.error(error));
  }, [flickrApiUrl]);

  return show ? (
    <img src={img} className={"my-3"} width="200" alt={props.query} style={{ borderRadius: "10px" }} />
  ) : (
    <div>Loading</div>
  );
};
export default Flickr;
