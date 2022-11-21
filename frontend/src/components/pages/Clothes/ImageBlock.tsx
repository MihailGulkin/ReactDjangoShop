import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";

import { productPropertiesSelector } from "@/redux/productProperties/selectors";

import { returnValidColors } from "@/utils/hasColor";

import { sliderSettings } from "@/components/pages/Clothes/slider-settings";
import { ImageBlockType } from "@/@types/pages/Clothes";

export const ImageBlock: React.FC<ImageBlockType> = ({ albumImages, pk }) => {
  const { propertiesList } = useSelector(productPropertiesSelector);

  const [ActiveImgIndex, setActiveImg] = useState(0);
  if (!albumImages) {
    return <img alt="eccomerce" src="" />;
  }
  const onClickIndex = (index: number) => {
    setActiveImg(index);
  };
  return (
    <div className="h-max w-96 max-w-md border bg-white rounded shadow-lg">
      <img
        className="object-cover object-center p-1 h-96 w-96"
        src={returnValidColors(propertiesList, pk, albumImages)[ActiveImgIndex]}
        alt=""
      />
      <Slider {...sliderSettings} afterChange={(index) => setActiveImg(index)}>
        {returnValidColors(propertiesList, pk, albumImages).map(
          (obj, index) => (
            <img
              className="w-max h-48 object-cover object-center pr-1 pl-1"
              src={obj}
              key={index}
              onClick={() => onClickIndex(index)}
              alt=""
            />
          )
        )}
      </Slider>
    </div>
  );
};
