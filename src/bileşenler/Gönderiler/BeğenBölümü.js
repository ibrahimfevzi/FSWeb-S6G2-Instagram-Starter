// 26. satırdaki beğeni sayısına bakın. Şu anda '100' olarak kodlanmış durumda.
// Doğru beğeni sayısını görüntülemek için proplardan gelen bir veri parçasını kullanın.
// Beğeni sayısını artırmak için "gonderiyiBegen" fonksiyonunu kullanan bir onClick işleyicisi de ekleyeceksiniz.
// (Ek görev olarak, kullanıcınızın aynı gönderiyi birden fazla kez "beğenmesini" engelleyin.)
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";

const BeğenBölümü = (props) => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.

  // Proplardan gelen beğeniSayisi'ni state olarak ayarlayın
  const [begeniSayisi, setBegeniSayisi] = useState(props.begeniSayisi);
  // State'deki beğeniSayisi'ni artırmak için bir onClick işleyicisi ekleyin
  const handleBegen = () => {
    setBegeniSayisi((prevBegeniSayisi) => prevBegeniSayisi + 1);
  };

  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      {/* State'deki beğeniSayisi'ni göstermek için güncellenmiş JSX */}
      <p className="like-number">{begeniSayisi} likes</p>{" "}
    </div>
  );
};

export default BeğenBölümü;
