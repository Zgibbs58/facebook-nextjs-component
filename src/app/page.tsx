import Image from "next/image";
import FacebookPosts from "./components/FacebookPosts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0ujB9hihTEA4u7Lh6EBsUVGSqkDymcjiZTZdzaESKAvfgzdAx1UkmZXhhfQaRffZ7l%26id%3D100001925855214&show_text=true&width=500"
        width="500"
        height="396"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0fAsZEtqp15ggrFXQNfgHa4eCCtSdzUUQerXheaWw8q8Lr5tmHybRwDvAAcmzfp4Jl%26id%3D100001925855214&show_text=true&width=500"
        width="500"
        height="665"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe> */}
      <FacebookPosts />
    </main>
  );
}
