import React from "react";

const CategoryList = ({ category }) => {
  return (
    <li className="mb-5">
      <span className="inline-block mr-2">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.00062 9.66864C4.86821 9.66941 4.73856 9.63073 4.62821 9.55753C4.51787 9.48433 4.43182 9.37992 4.38104 9.25763C4.33026 9.13533 4.31706 9.00068 4.3431 8.87085C4.36915 8.74102 4.43327 8.62189 4.52729 8.52864L8.06062 5.00197L4.52729 1.4753C4.41807 1.34777 4.361 1.18372 4.36748 1.01594C4.37396 0.848152 4.44352 0.688992 4.56225 0.570262C4.68098 0.451533 4.84014 0.381978 5.00792 0.375497C5.1757 0.369016 5.33975 0.426087 5.46729 0.535305L9.46729 4.53531C9.59146 4.66021 9.66115 4.82918 9.66115 5.0053C9.66115 5.18143 9.59146 5.3504 9.46729 5.4753L5.46729 9.4753C5.34311 9.59847 5.17552 9.6679 5.00062 9.66864Z"
            fill="#083C2F"
          />
          <path
            d="M1.00062 9.66809C0.868206 9.66886 0.73856 9.63018 0.628213 9.55698C0.517867 9.48378 0.431819 9.37938 0.381041 9.25708C0.330264 9.13479 0.317056 9.00014 0.343102 8.87031C0.369149 8.74048 0.433269 8.62134 0.527289 8.52809L4.06062 5.00143L0.527289 1.47476C0.401753 1.34922 0.331227 1.17896 0.331227 1.00143C0.331227 0.823891 0.401753 0.653628 0.527289 0.528092C0.652824 0.402557 0.823088 0.332031 1.00062 0.332031C1.17816 0.332031 1.34842 0.402557 1.47396 0.528092L5.47396 4.52809C5.59812 4.653 5.66782 4.82197 5.66782 4.99809C5.66782 5.17422 5.59812 5.34318 5.47396 5.46809L1.47396 9.46809C1.41221 9.53109 1.33858 9.5812 1.25733 9.61553C1.17608 9.64986 1.08883 9.66773 1.00062 9.66809Z"
            fill="#083C2F"
          />
        </svg>
      </span>
      {category}
    </li>
  );
};

export default CategoryList;
