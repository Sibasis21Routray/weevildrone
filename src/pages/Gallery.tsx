import Hero from "../components/gallery/Hero";
import { ImageGallery } from "../components/gallery/ImageGallery";
function Gallery() {


   const sampleImages = [
     {
       id: "1",
       src: "/gallery/1-Bengal-Air-NCC_Training_15.jpg",
       alt: "1 Bengal Air NCC Training 15",
       title: "Gallery Image 1",
       category: "army",
     },
     {
       id: "2",
       src: "/gallery/1-Bengal-Air-NCC_Training_1-scaled.jpg",
       alt: "1 Bengal Air NCC Training 1",
       title: "Gallery Image 2",
       category: "army",
     },
     {
       id: "3",
       src: "/gallery/1-Bengal-Air-NCC_Training_3.jpg",
       alt: "1 Bengal Air NCC Training 3",
       title: "Gallery Image 3",
       category: "army",
     },
     {
       id: "4",
       src: "/gallery/1-Bengal-Air-NCC_Training_4-1.jpg",
       alt: "1 Bengal Air NCC Training 4",
       title: "Gallery Image 4",
       category: "army",
     },
     {
       id: "5",
       src: "/gallery/1-Bengal-Air-NCC_Training_5-1.jpg",
       alt: "1 Bengal Air NCC Training 5",
       title: "Gallery Image 5",
       category: "army",
     },
     {
       id: "6",
       src: "/gallery/1-Bengal-Air-NCC_Training_6.jpg",
       alt: "1 Bengal Air NCC Training 6",
       title: "Gallery Image 6",
       category: "army",
     },
     {
       id: "7",
       src: "/gallery/1-Bengal-Air-NCC_Training_9-1-scaled.jpg",
       alt: "1 Bengal Air NCC Training 9",
       title: "Gallery Image 7",
       category: "army",
     },
     {
       id: "8",
       src: "/gallery/2.jpg",
       alt: "Image 2",
       title: "Gallery Image 8",
       category: "recent",
     },
     {
       id: "9",
       src: "/gallery/3.jpg",
       alt: "Image 3",
       title: "Gallery Image 9",
       category: "army",
     },
     {
       id: "10",
       src: "/gallery/4.jpg",
       alt: "Image 4",
       title: "Gallery Image 10",
       category: "recent",
     },
     {
       id: "11",
       src: "/gallery/5.jpg",
       alt: "Image 5",
       title: "Gallery Image 11",
       category: "army",
     },
     {
       id: "12",
       src: "/gallery/6.jpg",
       alt: "Image 6",
       title: "Gallery Image 12",
       category: "recent",
     },
     {
       id: "13",
       src: "/gallery/Icarus_5-scaled.jpg",
       alt: "Icarus 5",
       title: "Gallery Image 13",
       category: "army",
     },
     {
       id: "14",
       src: "/gallery/P1919039-scaled.jpg",
       alt: "P1919039",
       title: "Gallery Image 14",
       category: "army",
     },
     {
       id: "15",
       src: "/gallery/P1919051-scaled.jpg",
       alt: "P1919051",
       title: "Gallery Image 15",
       category: "army",
     },
     {
       id: "16",
       src: "/gallery/P1919058-1.jpg",
       alt: "P1919058-1",
       title: "Gallery Image 16",
       category: "army",
     },
     {
       id: "17",
       src: "/gallery/P1919072.jpg",
       alt: "P1919072",
       title: "Gallery Image 17",
       category: "army",
     },
     {
       id: "18",
       src: "/gallery/P1919083-scaled.jpg",
       alt: "P1919083",
       title: "Gallery Image 18",
       category: "recent",
     },
     {
       id: "19",
       src: "/gallery/P1919084.jpg",
       alt: "P1919084",
       title: "Gallery Image 19",
       category: "army",
     },
     {
       id: "20",
       src: "/gallery/P1919097-scaled.jpg",
       alt: "P1919097",
       title: "Gallery Image 20",
       category: "army",
     },
     {
       id: "21",
       src: "/gallery/P1919107-scaled.jpg",
       alt: "P1919107",
       title: "Gallery Image 21",
       category: "army",
     },
     {
       id: "22",
       src: "/gallery/P1919111.jpg",
       alt: "P1919111",
       title: "Gallery Image 22",
       category: "recent",
     },
     {
       id: "23",
       src: "/gallery/P1919118.jpg",
       alt: "P1919118",
       title: "Gallery Image 23",
       category: "army",
     },
     {
       id: "24",
       src: "/gallery/P1919124-scaled.jpg",
       alt: "P1919124",
       title: "Gallery Image 24",
       category: "army",
     },
     {
       id: "25",
       src: "/gallery/P1919153.jpg",
       alt: "P1919153",
       title: "Gallery Image 25",
       category: "army",
     },
     {
       id: "26",
       src: "/gallery/P1919163-scaled.jpg",
       alt: "P1919163",
       title: "Gallery Image 26",
       category: "recent",
     },
     {
       id: "27",
       src: "/gallery/P1919172-scaled.jpg",
       alt: "P1919172",
       title: "Gallery Image 27",
       category: "army",
     },
     {
       id: "28",
       src: "/gallery/P1919175.jpg",
       alt: "P1919175",
       title: "Gallery Image 28",
       category: "army",
     },
     {
       id: "29",
       src: "/gallery/P1919182-scaled.jpg",
       alt: "P1919182",
       title: "Gallery Image 29",
       category: "recent",
     },
     {
       id: "30",
       src: "/gallery/P1919189-scaled.jpg",
       alt: "P1919189",
       title: "Gallery Image 30",
       category: "army",
     },
     {
       id: "31",
       src: "/gallery/P1919194-scaled.jpg",
       alt: "P1919194",
       title: "Gallery Image 31",
       category: "army",
     },
     {
       id: "32",
       src: "/gallery/P1919197.jpg",
       alt: "P1919197",
       title: "Gallery Image 32",
       category: "recent",
     },
     {
       id: "33",
       src: "/gallery/P1919204-scaled.jpg",
       alt: "P1919204",
       title: "Gallery Image 33",
       category: "army",
     },
     {
       id: "34",
       src: "/gallery/P1919214-scaled.jpg",
       alt: "P1919214",
       title: "Gallery Image 34",
       category: "army",
     },
     {
       id: "35",
       src: "/gallery/P1919229-scaled.jpg",
       alt: "P1919229",
       title: "Gallery Image 35",
       category: "recent",
     },
     {
       id: "36",
       src: "/gallery/P1919235-scaled.jpg",
       alt: "P1919235",
       title: "Gallery Image 36",
       category: "army",
     },
     {
       id: "37",
       src: "/gallery/P1919255-scaled.jpg",
       alt: "P1919255",
       title: "Gallery Image 37",
       category: "recent",
     },
     {
       id: "38",
       src: "/gallery/Screenshot-2025-02-21-125707.png",
       alt: "Screenshot 125707",
       title: "Gallery Image 38",
       category: "recent",
     },
     {
       id: "39",
       src: "/gallery/WhatsApp-Image-2025-09-23-at-2.48.46-PM.jpeg",
       alt: "WhatsApp Image 1",
       title: "Gallery Image 39",
       category: "recent",
     },
     {
       id: "40",
       src: "/gallery/WhatsApp-Image-2025-09-23-at-2.48.47-PM-2.jpeg",
       alt: "WhatsApp Image 2",
       title: "Gallery Image 40",
       category: "recent",
     },
     {
       id: "41",
       src: "/gallery/WhatsApp-Image-2025-09-23-at-2.48.47-PM.jpeg",
       alt: "WhatsApp Image 3",
       title: "Gallery Image 41",
       category: "recent",
     },
     {
       id: "42",
       src: "/gallery/WhatsApp-Image-2025-09-23-at-2.48.48-PM-1.jpeg",
       alt: "WhatsApp Image 4",
       title: "Gallery Image 42",
       category: "recent",
     },
     {
       id: "43",
       src: "/gallery/WhatsApp-Image-2025-09-23-at-2.48.48-PM.jpeg",
       alt: "WhatsApp Image 5",
       title: "Gallery Image 43",
       category: "recent",
     },
     {
       id: "44",
       src: "/gallery/WhatsApp-Image-2025-09-23-at-2.48.51-PM-1.jpeg",
       alt: "WhatsApp Image 6",
       title: "Gallery Image 44",
       category: "recent",
     },
     {
       id: "45",
       src: "/gallery/WhatsApp-Image-2025-09-23-at-2.48.51-PM-scaled.jpeg",
       alt: "WhatsApp Image 7",
       title: "Gallery Image 45",
       category: "recent",
     },
     {
       id: "46",
       src: "/gallery/WhatsApp-Image-2025-09-23-at-2.48.52-PM-1.jpeg",
       alt: "WhatsApp Image 8",
       title: "Gallery Image 46",
       category: "recent",
     },
     {
       id: "47",
       src: "/gallery/WhatsApp-Image-2025-09-23-at-2.48.52-PM-scaled.jpeg",
       alt: "WhatsApp Image 9",
       title: "Gallery Image 47",
       category: "recent",
     },
   ];

  
  
  return (
    <div>
      <Hero />
      
        <ImageGallery
          images={sampleImages}
          columns={3}
          gap={6}
          enableFilter={true}
          enableModal={true}
        />
    </div>
  );
}

export default Gallery;
