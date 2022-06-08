import Form from "../yup-form/Form";
import InputYup from "../yup-form/InputYup";
import SubmitButton from "../yup-form/SubmitButton";
import SelectorYup from "../yup-form/SelectorYup";
import * as yup from "yup";
import { useItem } from "../../contexts/ItemContext";

function CreateItemAdmin() {
  const { createItem } = useItem();

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
    await createItem({
      charactorName,
      animeName,
      releaseDate,
      brand,
      price,
      copyRight,
      detail,
      status,
    });
    reset();
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
