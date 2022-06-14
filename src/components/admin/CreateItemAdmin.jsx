import Form from "../yup-form/Form";
import InputYup from "../yup-form/InputYup";
import SubmitButton from "../yup-form/SubmitButton";
import SelectorYup from "../yup-form/SelectorYup";
import * as yup from "yup";
import { useItem } from "../../contexts/ItemContext";
import { useState } from "react";
import { useRef } from "react";

function CreateItemAdmin() {
  const { createItem } = useItem();
  const mainPicRef = useRef(null);
  const alterPicRef = useRef(null);

  const [mainImageUrl, setMainImageUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isImageFilledMain, setIsImageFilledMain] = useState(false);
  const [isImageFilledAlter, setIsImageFilledAlter] = useState(false);

  const schema = yup.object().shape({
    charactorName: yup.string().required("Charactor_name is required"),
    animeName: yup.string().required("Anime_name is required"),
    price: yup.string().required("Price is required"),
    releaseDate: yup.date().required("Releasedate is required"),
    brand: yup.string().required("Brand is required"),
    copyRight: yup.string().required("Copyright is required"),
    detail: yup.string().required("Detail is required"),
    status: yup.string().required("Status is required"),
  });

  const statusSelector = [
    { label: "preorder", value: "preorder" },
    { label: "instock", value: "instock" },
    { label: "soldout", value: "soldout" },
  ];

  const handleSubmit = async (
    {
      charactorName,
      animeName,
      releaseDate,
      brand,
      price,
      copyRight,
      detail,
      status,
    },
    reset
  ) => {
    const formData = new FormData();
    formData.append("charactorName", charactorName);
    formData.append("animeName", animeName);
    formData.append("releaseDate", releaseDate);
    formData.append("brand", brand);
    formData.append("price", price);
    formData.append("copyRight", copyRight);
    formData.append("detail", detail);
    formData.append("status", status);
    console.log(mainImageUrl);
    console.log(imageUrl);
    formData.append("mainImageUrl", mainImageUrl);
    for (let k of imageUrl) {
      formData.append("imageUrl", k);
    }
    await createItem(formData);
    reset();
    setMainImageUrl("");
    setImageUrl("");
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        schema={schema}
        className="gap-3 space-y-4 bg-pink-300 opacity-[0.93] p-3 py-10 w-[400px] rounded mx-auto"
      >
        <h1 className="text-center text-3xl font-bold pb-3">Create Item</h1>
        <InputYup
          name="charactorName"
          type="text"
          placeholder="charactorName"
        />
        <InputYup name="animeName" type="text" placeholder="animeName" />
        <InputYup name="price" type="text" placeholder="price" />
        <InputYup name="releaseDate" type="date" placeholder="releaseDate" />
        <InputYup name="brand" type="text" placeholder="brand" />
        <InputYup name="copyRight" type="text" placeholder="copyRight" />
        <InputYup name="detail" type="text" placeholder="detail" />
        <div className="flex justify-between">
          <button
            onClick={() => mainPicRef.current.click()}
            className="text-white rounded p-2 bg-blue-400 hover:bg-blue-700"
          >
            {isImageFilledMain ? "Main Picture Ready" : "Main Picture"}
          </button>
          <button
            onClick={() => alterPicRef.current.click()}
            className="text-white rounded p-2 bg-blue-400 hover:bg-blue-700"
          >
            {isImageFilledAlter ? "Alter Picture Ready" : "Alter Picture"}
          </button>
        </div>
        <input
          className="hidden"
          type="file"
          ref={mainPicRef}
          onChange={(e) => {
            if (e.target.files[0]) {
              setMainImageUrl(e.target.files[0]);
              setIsImageFilledMain(true);
            }
          }}
        />
        <input
          type="file"
          className="hidden"
          ref={alterPicRef}
          multiple
          onChange={(e) => {
            if (e.target.files[0]) {
              setImageUrl(e.target.files);
              setIsImageFilledAlter(true);
            }
          }}
        />
        <SelectorYup
          defaultValue={statusSelector[0].value}
          data={statusSelector}
          containerClassname="flex gap-2 justify-end items-center"
          className="rounded"
          name="status"
        />
        <SubmitButton className="w-full bg-blue-500 hover:bg-blue-700 text-white rounded mt-4">
          Submit
        </SubmitButton>
      </Form>
    </div>
  );
}

export default CreateItemAdmin;
