import React from "react";
import Yorumlar from "../Yorumlar/Yorumlar";
import BeğenBölümü from "./BeğenBölümü";
import GönderiBaşlığı from "./GönderiBaşlığı";

const Gönderi = (props) => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { gönderi, begeniSayisi, gonderiyiBegen } = props;

  return (
    <div className="post-border">
      <GönderiBaşlığı
        username={gönderi.username}
        thumbnailUrl={gönderi.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={gönderi.imageUrl}
        />
      </div>
      {/* BeğenBölümü düzgün çalışması için ihtiyaç duyduğu tüm proplara sahip mi? */}
      <BeğenBölümü
        begeniSayisi={begeniSayisi}
        gonderiyiBegen={() => gonderiyiBegen(gönderi.id)}
      />
      <Yorumlar yorumlar={gönderi.yorumlar} />{" "}
      {/* Yorumlar da proplara dikkat istiyor! */}
      <Yorumlar />
    </div>
  );
};

export default Gönderi;
