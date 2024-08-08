"use client";

import { useState } from "react";
import { addHospitalToFirestore } from "../lib/firestore";

const AddHospitalForm = () => {
  const [hospitalData, setHospitalData] = useState<HospitalData>({
    name: "",
    address: "",
    phoneNumber: "",
    website: "",
    state: "",
    city: "",
    description: "",
    nickname: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setHospitalData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !hospitalData.name ||
      !hospitalData.address ||
      !hospitalData.phoneNumber ||
      !hospitalData.website ||
      !hospitalData.state ||
      !hospitalData.city ||
      !hospitalData.description
    ) {
      setErrorMessage("Please fill all the fields");
      return;
    }
    try {
      await addHospitalToFirestore(hospitalData);
      setHospitalData({
        name: "",
        address: "",
        phoneNumber: "",
        website: "",
        state: "",
        city: "",
        description: "",
        nickname: "",
      });
      setErrorMessage("");
      setSuccessMessage("Hospital added successfully!");
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage(String(error));
      }
    }
  };

  return (
    <section className="pt-32 mx-3 mb-10">
      <h2 className="text-center uppercase text-xl font-extrabold">
        Add a Hospital
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center !text-white"
      >
        <div className="form-control mx-3 my-4 w-full max-w-3xl">
          <label className="label" htmlFor="HospitalName">
            <span className="">
              Hospital Name<span className="text-red-500">*</span>
            </span>
          </label>{" "}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="input bg-[#3d4451] input-bordered w-full"
            value={hospitalData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-control mx-3 my-4 w-full max-w-3xl">
          <label className="label" htmlFor="Nickname">
            <span className="">Nickname</span>
          </label>{" "}
          <input
            type="text"
            id="nickname"
            name="nickname"
            placeholder="Nickname"
            className="input bg-[#3d4451] input-bordered w-full"
            value={hospitalData.nickname}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-control my-4 w-full max-w-3xl">
          <label className="label" htmlFor="address">
            <span className="">
              Hospital Address<span className="text-red-500">*</span>
            </span>
          </label>
          <input
            type="text"
            id="address"
            onChange={handleInputChange}
            value={hospitalData.address}
            name="address"
            placeholder="Address"
            className="input bg-[#3d4451] input-bordered w-full"
          />
        </div>

        <div className="w-full max-w-3xl flex md:flex-row flex-col gap-5">
          <div className="form-control w-full">
            <label className="label" htmlFor="city">
              <span className="">
                City<span className="text-red-500">*</span>
              </span>
            </label>{" "}
            <input
              type="text"
              id="city"
              name="city"
              value={hospitalData.city}
              onChange={handleInputChange}
              placeholder="City"
              className="input bg-[#3d4451] input-bordered w-full "
            />
          </div>
          <div className="form-control w-full">
            <label className="label" htmlFor="state">
              <span className="">
                State<span className="text-red-500">*</span>
              </span>
            </label>{" "}
            <input
              type="text"
              id="state"
              name="state"
              value={hospitalData.state}
              onChange={handleInputChange}
              placeholder="State"
              className="input bg-[#3d4451] input-bordered w-full"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl flex mt-4 md:flex-row flex-col gap-5">
          <div className="form-control w-full">
            <label className="label" htmlFor="phoneNumber">
              <span className="">
                Phone Number<span className="text-red-500">*</span>
              </span>
            </label>{" "}
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              value={hospitalData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="input input-bordered bg-[#3d4451] w-full placeholder-opacity-70"
            />
          </div>
          <div className="form-control w-full">
            <label className="label" htmlFor="website">
              <span className="">
                website<span className="text-red-500">*</span>
              </span>
            </label>{" "}
            <div className="bg-[#3d4451] flex items-center input input-bordered w-full">
              <span className="text-sm">https://</span>
              <input
                type="text"
                id="website"
                name="website"
                value={hospitalData.website}
                onChange={handleInputChange}
                className="w-full ml-2 bg-[#3d4451] placeholder-opacity-70"
              />
            </div>
          </div>
        </div>
        <div className="form-control my-4 w-full max-w-3xl">
          <label className="label" htmlFor="description">
            <span className="">
              description <span className="text-red-500">*</span>
            </span>
          </label>
          <textarea
            id="description"
            name="description"
            value={hospitalData.description}
            onChange={handleInputChange}
            className="bg-[#3d4451] textarea textarea-bordered h-24"
            placeholder="Details about the hospital"
          ></textarea>
        </div>

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        {successMessage && <p className="text-green-500">{successMessage}</p>}
        <button className="btn w-full max-w-3xl mt-4 md:mb-4" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddHospitalForm;
