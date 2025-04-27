import React from "react";

export default function PostCommentForm() {
  return (
    <form className="my-0 mx-auto max-w-[730px]" action="" method="POST">
      <div className="text-2xl font-bold lg:text-3xl lg:text-left text-black mb-[30px] lg:mb-[52px]">
        Post a comment
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:m-[0_-15px_30px]">
        <div className="w-full m-[0_0_15px] lg:w-[calc(50%-30px)] lg:m-[0_15px]">
          <label className="mb-0 relative block w-full cursor-text">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full h-[50px] p-4 border border-[#d4d4d4] bg-white border-color placeholder:opacity-50 focus:outline-none placeholder:text-black lg:focus:border-black lg:hover:border-black focus:placeholder:opacity-0 block text-[#787878] transition-colors"
            />
          </label>
          <div className="mb-[15px] mt-[5px]" style={{ display: "none" }}></div>
        </div>
        <div className="w-full m-[0_0_15px] lg:w-[calc(50%-30px)] lg:m-[0_15px]">
          <label className="mb-0 relative block w-full cursor-text">
            <input
              type="email"
              name="email"
              placeholder="Email *"
              required
              className="w-full h-[50px] p-4 border border-[#d4d4d4] bg-white border-color placeholder:opacity-50 focus:outline-none placeholder:text-black lg:hover:border-black lg:focus:border-black focus:placeholder:opacity-0 block text-[#787878] transition-colors"
            />
          </label>
          <div className="mb-[15px] mt-[5px]" style={{ display: "none" }}></div>
        </div>
      </div>
      <label className="relative block w-full cursor-text">
        <textarea
          name="message"
          placeholder="Message *"
          required
          className="w-full h-[150px] xl:h-[174px] resize-none p-6 border border-[#d4d4d4] bg-white border-color placeholder:opacity-50 placeholder:text-black focus:outline-none lg:hover:border-black lg:focus:border-black focus:placeholder:opacity-0 block text-[#787878] transition-colors"
        ></textarea>
      </label>
      <div className="mb-[15px] mt-[5px]" style={{ display: "none" }}></div>
      <button
        className="inline-block align-top mt-8 p-[17px_20px] md:p-[17px_44px] hover:outline-none hover:bg-[#eeba04] hover:text-black hover:shadow-none focus:outline-none focus:bg-[#eeba04] focus:text-black focus:shadow-none active:opacity-70 active:shadow-none text-black uppercase text-center border border-[#fbc710] bg-[#fbc710] cursor-pointer comment-form__btn"
        type="submit"
      >
        Post comment
      </button>
    </form>
  );
}
