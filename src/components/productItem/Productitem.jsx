import React from "react";
import "./Productitem.css"

const Productitem = () => {
  return (
    <div className="product_item">
      <div className="thumb">
        <div className="product-cover-5" ></div>
        <div className="product-actions">
          <div className="like">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M10.5011 5.95324L9.13675 4.55662L9.13618 4.55605C8.78829 4.20177 8.37329 3.92037 7.91542 3.72827C7.45755 3.53617 6.966 3.43723 6.46946 3.43723C5.97293 3.43723 5.48138 3.53617 5.02351 3.72827C4.56569 3.92035 4.15072 4.20172 3.80284 4.55595C3.08889 5.28087 2.68871 6.25752 2.68871 7.275C2.68871 8.29259 3.08898 9.26935 3.80308 9.9943L3.80337 9.99459L10.2784 16.5508L10.5007 16.776L10.7231 16.5508L17.1981 9.99459L17.1983 9.9943C17.9124 9.26935 18.3127 8.29259 18.3127 7.275C18.3127 6.25753 17.9125 5.28088 17.1986 4.55595C16.8509 4.20148 16.4359 3.91997 15.9781 3.72791C15.5203 3.53591 15.0288 3.43718 14.5324 3.4375C14.5322 3.4375 14.5319 3.4375 14.5317 3.4375L14.532 3.75M10.5011 5.95324L11.8581 4.56949L11.8588 4.5687L12.082 4.7875M10.5011 5.95324L11.8572 4.57036M10.5011 5.95324L11.8572 4.57036M14.532 3.75C14.0748 3.74935 13.6222 3.84089 13.2013 4.01915C12.7803 4.19741 12.3996 4.45874 12.082 4.7875M14.532 3.75C14.987 3.74962 15.4376 3.84008 15.8572 4.01609C16.2768 4.1921 16.6571 4.45011 16.9757 4.775L14.532 3.75ZM12.082 4.7875L11.8572 4.57036M12.082 4.7875L11.8572 4.57036M14.5319 2.8125L14.5317 2.8125C13.9518 2.81201 13.3777 2.9273 12.8429 3.15161C12.3082 3.37593 11.8236 3.70475 11.4176 4.11879L11.4164 4.11998L10.7227 4.81998L10.5007 5.04394L10.2788 4.81998L9.585 4.11998L9.58416 4.11913C9.17759 3.70575 8.6928 3.37744 8.15805 3.15333C7.62329 2.92923 7.04928 2.81381 6.46946 2.81381C5.88965 2.81381 5.31563 2.92923 4.78088 3.15333C4.24614 3.37744 3.76136 3.70574 3.35479 4.1191L14.5319 2.8125ZM14.5319 2.8125C15.1118 2.81266 15.6858 2.92827 16.2206 3.15259C16.7554 3.37691 17.2401 3.70544 17.6466 4.11904C18.4755 4.96287 18.9399 6.09841 18.9399 7.28125C18.9399 8.46391 18.4756 9.59929 17.647 10.4431C17.6468 10.4432 17.6467 10.4434 17.6465 10.4435L10.5007 17.6802M14.5319 2.8125L10.5007 17.6802M10.5007 17.6802L3.3549 10.4435C3.35479 10.4434 3.35468 10.4433 3.35458 10.4432C2.52585 9.59939 2.06152 8.46396 2.06152 7.28125C2.06152 6.09846 2.52592 4.96295 3.35476 4.11913L10.5007 17.6802Z"
                fill="#BDBDBD"
                stroke="#252B42"
                stroke-width="0.625"
              />
            </svg>
          </div>
          <div className="basket">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <g clip-path="url(#clip0_3007_12968)">
                <path
                  d="M0.5 1.63333C0.5 1.46536 0.566728 1.30427 0.685505 1.1855C0.804281 1.06673 0.965377 1 1.13335 1H3.03341C3.17469 1.00004 3.3119 1.04731 3.42322 1.1343C3.53454 1.22129 3.61357 1.34299 3.64776 1.48007L4.16078 3.53333H18.8672C18.9602 3.53342 19.0521 3.55398 19.1362 3.59356C19.2204 3.63315 19.2948 3.69077 19.3541 3.76235C19.4135 3.83393 19.4564 3.9177 19.4797 4.00772C19.5031 4.09774 19.5063 4.19179 19.4892 4.2832L17.5891 14.4165C17.562 14.5617 17.4849 14.6927 17.3714 14.7871C17.2578 14.8815 17.1148 14.9332 16.9672 14.9333H5.56682C5.41917 14.9332 5.2762 14.8815 5.16263 14.7871C5.04906 14.6927 4.97204 14.5617 4.94487 14.4165L3.04608 4.3022L2.5394 2.26667H1.13335C0.965377 2.26667 0.804281 2.19994 0.685505 2.08117C0.566728 1.96239 0.5 1.8013 0.5 1.63333ZM4.42932 4.8L6.09251 13.6667H16.4415L18.1047 4.8H4.42932ZM6.83353 14.9333C6.16163 14.9333 5.51724 15.2002 5.04214 15.6753C4.56703 16.1504 4.30012 16.7948 4.30012 17.4667C4.30012 18.1385 4.56703 18.7829 5.04214 19.258C5.51724 19.7331 6.16163 20 6.83353 20C7.50543 20 8.14981 19.7331 8.62492 19.258C9.10003 18.7829 9.36694 18.1385 9.36694 17.4667C9.36694 16.7948 9.10003 16.1504 8.62492 15.6753C8.14981 15.2002 7.50543 14.9333 6.83353 14.9333ZM15.7005 14.9333C15.0286 14.9333 14.3842 15.2002 13.9091 15.6753C13.434 16.1504 13.1671 16.7948 13.1671 17.4667C13.1671 18.1385 13.434 18.7829 13.9091 19.258C14.3842 19.7331 15.0286 20 15.7005 20C16.3724 20 17.0168 19.7331 17.4919 19.258C17.967 18.7829 18.2339 18.1385 18.2339 17.4667C18.2339 16.7948 17.967 16.1504 17.4919 15.6753C17.0168 15.2002 16.3724 14.9333 15.7005 14.9333ZM6.83353 16.2C7.16948 16.2 7.49167 16.3335 7.72922 16.571C7.96678 16.8085 8.10023 17.1307 8.10023 17.4667C8.10023 17.8026 7.96678 18.1248 7.72922 18.3623C7.49167 18.5999 7.16948 18.7333 6.83353 18.7333C6.49758 18.7333 6.17539 18.5999 5.93783 18.3623C5.70028 18.1248 5.56682 17.8026 5.56682 17.4667C5.56682 17.1307 5.70028 16.8085 5.93783 16.571C6.17539 16.3335 6.49758 16.2 6.83353 16.2ZM15.7005 16.2C16.0364 16.2 16.3586 16.3335 16.5962 16.571C16.8337 16.8085 16.9672 17.1307 16.9672 17.4667C16.9672 17.8026 16.8337 18.1248 16.5962 18.3623C16.3586 18.5999 16.0364 18.7333 15.7005 18.7333C15.3645 18.7333 15.0423 18.5999 14.8048 18.3623C14.5672 18.1248 14.4338 17.8026 14.4338 17.4667C14.4338 17.1307 14.5672 16.8085 14.8048 16.571C15.0423 16.3335 15.3645 16.2 15.7005 16.2Z"
                  fill="#252B42"
                />
              </g>
              <defs>
                <clipPath id="clip0_3007_12968">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="like">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M13 10C13 10.663 12.7366 11.2989 12.2678 11.7678C11.7989 12.2366 11.163 12.5 10.5 12.5C9.83696 12.5 9.20107 12.2366 8.73223 11.7678C8.26339 11.2989 8 10.663 8 10C8 9.33696 8.26339 8.70107 8.73223 8.23223C9.20107 7.76339 9.83696 7.5 10.5 7.5C11.163 7.5 11.7989 7.76339 12.2678 8.23223C12.7366 8.70107 13 9.33696 13 10Z"
                fill="black"
              />
              <path
                d="M2.5 10C2.5 10 5.5 4.5 10.5 4.5C15.5 4.5 18.5 10 18.5 10C18.5 10 15.5 15.5 10.5 15.5C5.5 15.5 2.5 10 2.5 10ZM10.5 13.5C11.4283 13.5 12.3185 13.1313 12.9749 12.4749C13.6313 11.8185 14 10.9283 14 10C14 9.07174 13.6313 8.1815 12.9749 7.52513C12.3185 6.86875 11.4283 6.5 10.5 6.5C9.57174 6.5 8.6815 6.86875 8.02513 7.52513C7.36875 8.1815 7 9.07174 7 10C7 10.9283 7.36875 11.8185 8.02513 12.4749C8.6815 13.1313 9.57174 13.5 10.5 13.5Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-card">
        <h4>title</h4>
        <div className="prices">
          <h5>price1</h5>
        </div>
        <div className="small_full_stars">
          <div className="stars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.9735 4.58948C10.9421 4.49691 10.8842 4.41557 10.8071 4.35551C10.73 4.29544 10.637 4.25928 10.5395 4.25148L7.68901 4.02498L6.45551 1.29448C6.41623 1.20653 6.35233 1.13184 6.27154 1.07941C6.19074 1.02697 6.09649 0.999046 6.00017 0.998993C5.90386 0.99894 5.80958 1.02676 5.72873 1.07911C5.64787 1.13145 5.58389 1.20608 5.54451 1.29398L4.31101 4.02498L1.46051 4.25148C1.36474 4.25906 1.27318 4.29408 1.19679 4.35234C1.1204 4.4106 1.06241 4.48964 1.02976 4.57999C0.99711 4.67035 0.991182 4.76819 1.01269 4.86183C1.03419 4.95546 1.08221 5.04092 1.15101 5.10798L3.25751 7.16148L2.51251 10.3875C2.48989 10.4851 2.49714 10.5873 2.53332 10.6808C2.5695 10.7743 2.63294 10.8547 2.71541 10.9117C2.79788 10.9687 2.89557 10.9995 2.9958 11.0003C3.09604 11.0011 3.19419 10.9717 3.27751 10.916L6.00001 9.10098L8.72251 10.916C8.80768 10.9725 8.90812 11.0016 9.01033 10.9994C9.11253 10.9972 9.2116 10.9637 9.29421 10.9034C9.37682 10.8432 9.439 10.7591 9.4724 10.6625C9.50579 10.5659 9.5088 10.4614 9.48101 10.363L8.56651 7.16298L10.8345 5.12198C10.983 4.98798 11.0375 4.77898 10.9735 4.58948Z"
                fill="#F3CD03"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.9735 4.58948C10.9421 4.49691 10.8842 4.41557 10.8071 4.35551C10.73 4.29544 10.637 4.25928 10.5395 4.25148L7.68901 4.02498L6.45551 1.29448C6.41623 1.20653 6.35233 1.13184 6.27154 1.07941C6.19074 1.02697 6.09649 0.999046 6.00017 0.998993C5.90386 0.99894 5.80958 1.02676 5.72873 1.07911C5.64787 1.13145 5.58389 1.20608 5.54451 1.29398L4.31101 4.02498L1.46051 4.25148C1.36474 4.25906 1.27318 4.29408 1.19679 4.35234C1.1204 4.4106 1.06241 4.48964 1.02976 4.57999C0.99711 4.67035 0.991182 4.76819 1.01269 4.86183C1.03419 4.95546 1.08221 5.04092 1.15101 5.10798L3.25751 7.16148L2.51251 10.3875C2.48989 10.4851 2.49714 10.5873 2.53332 10.6808C2.5695 10.7743 2.63294 10.8547 2.71541 10.9117C2.79788 10.9687 2.89557 10.9995 2.9958 11.0003C3.09604 11.0011 3.19419 10.9717 3.27751 10.916L6.00001 9.10098L8.72251 10.916C8.80768 10.9725 8.90812 11.0016 9.01033 10.9994C9.11253 10.9972 9.2116 10.9637 9.29421 10.9034C9.37682 10.8432 9.439 10.7591 9.4724 10.6625C9.50579 10.5659 9.5088 10.4614 9.48101 10.363L8.56651 7.16298L10.8345 5.12198C10.983 4.98798 11.0375 4.77898 10.9735 4.58948Z"
                fill="#F3CD03"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.9735 4.58948C10.9421 4.49691 10.8842 4.41557 10.8071 4.35551C10.73 4.29544 10.637 4.25928 10.5395 4.25148L7.68901 4.02498L6.45551 1.29448C6.41623 1.20653 6.35233 1.13184 6.27154 1.07941C6.19074 1.02697 6.09649 0.999046 6.00017 0.998993C5.90386 0.99894 5.80958 1.02676 5.72873 1.07911C5.64787 1.13145 5.58389 1.20608 5.54451 1.29398L4.31101 4.02498L1.46051 4.25148C1.36474 4.25906 1.27318 4.29408 1.19679 4.35234C1.1204 4.4106 1.06241 4.48964 1.02976 4.57999C0.99711 4.67035 0.991182 4.76819 1.01269 4.86183C1.03419 4.95546 1.08221 5.04092 1.15101 5.10798L3.25751 7.16148L2.51251 10.3875C2.48989 10.4851 2.49714 10.5873 2.53332 10.6808C2.5695 10.7743 2.63294 10.8547 2.71541 10.9117C2.79788 10.9687 2.89557 10.9995 2.9958 11.0003C3.09604 11.0011 3.19419 10.9717 3.27751 10.916L6.00001 9.10098L8.72251 10.916C8.80768 10.9725 8.90812 11.0016 9.01033 10.9994C9.11253 10.9972 9.2116 10.9637 9.29421 10.9034C9.37682 10.8432 9.439 10.7591 9.4724 10.6625C9.50579 10.5659 9.5088 10.4614 9.48101 10.363L8.56651 7.16298L10.8345 5.12198C10.983 4.98798 11.0375 4.77898 10.9735 4.58948Z"
                fill="#F3CD03"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.9735 4.58948C10.9421 4.49691 10.8842 4.41557 10.8071 4.35551C10.73 4.29544 10.637 4.25928 10.5395 4.25148L7.68901 4.02498L6.45551 1.29448C6.41623 1.20653 6.35233 1.13184 6.27154 1.07941C6.19074 1.02697 6.09649 0.999046 6.00017 0.998993C5.90386 0.99894 5.80958 1.02676 5.72873 1.07911C5.64787 1.13145 5.58389 1.20608 5.54451 1.29398L4.31101 4.02498L1.46051 4.25148C1.36474 4.25906 1.27318 4.29408 1.19679 4.35234C1.1204 4.4106 1.06241 4.48964 1.02976 4.57999C0.99711 4.67035 0.991182 4.76819 1.01269 4.86183C1.03419 4.95546 1.08221 5.04092 1.15101 5.10798L3.25751 7.16148L2.51251 10.3875C2.48989 10.4851 2.49714 10.5873 2.53332 10.6808C2.5695 10.7743 2.63294 10.8547 2.71541 10.9117C2.79788 10.9687 2.89557 10.9995 2.9958 11.0003C3.09604 11.0011 3.19419 10.9717 3.27751 10.916L6.00001 9.10098L8.72251 10.916C8.80768 10.9725 8.90812 11.0016 9.01033 10.9994C9.11253 10.9972 9.2116 10.9637 9.29421 10.9034C9.37682 10.8432 9.439 10.7591 9.4724 10.6625C9.50579 10.5659 9.5088 10.4614 9.48101 10.363L8.56651 7.16298L10.8345 5.12198C10.983 4.98798 11.0375 4.77898 10.9735 4.58948Z"
                fill="#F3CD03"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.9735 4.58948C10.9421 4.49691 10.8842 4.41557 10.8071 4.35551C10.73 4.29544 10.637 4.25928 10.5395 4.25148L7.68901 4.02498L6.45551 1.29448C6.41623 1.20653 6.35233 1.13184 6.27154 1.07941C6.19074 1.02697 6.09649 0.999046 6.00017 0.998993C5.90386 0.99894 5.80958 1.02676 5.72873 1.07911C5.64787 1.13145 5.58389 1.20608 5.54451 1.29398L4.31101 4.02498L1.46051 4.25148C1.36474 4.25906 1.27318 4.29408 1.19679 4.35234C1.1204 4.4106 1.06241 4.48964 1.02976 4.57999C0.99711 4.67035 0.991182 4.76819 1.01269 4.86183C1.03419 4.95546 1.08221 5.04092 1.15101 5.10798L3.25751 7.16148L2.51251 10.3875C2.48989 10.4851 2.49714 10.5873 2.53332 10.6808C2.5695 10.7743 2.63294 10.8547 2.71541 10.9117C2.79788 10.9687 2.89557 10.9995 2.9958 11.0003C3.09604 11.0011 3.19419 10.9717 3.27751 10.916L6.00001 9.10098L8.72251 10.916C8.80768 10.9725 8.90812 11.0016 9.01033 10.9994C9.11253 10.9972 9.2116 10.9637 9.29421 10.9034C9.37682 10.8432 9.439 10.7591 9.4724 10.6625C9.50579 10.5659 9.5088 10.4614 9.48101 10.363L8.56651 7.16298L10.8345 5.12198C10.983 4.98798 11.0375 4.77898 10.9735 4.58948Z"
                fill="#F3CD03"
              />
            </svg>
          </div>
          <h6>rewiews</h6>
          <div className="product-colors">
            colors
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productitem;