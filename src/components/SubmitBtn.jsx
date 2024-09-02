import React from "react";

const SubmitBtn = ({ onClick, children, disabled }) => (
  <button
    type="submit"
    className="mt-10 px-12 py-3 rounded-md text-white bg-gradient-to-r from-green-400 to-lime-300"
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default SubmitBtn;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     