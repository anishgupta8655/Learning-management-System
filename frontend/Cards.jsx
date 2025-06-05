import { TiDeleteOutline } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { deleteCardThunk, getAllCardThunk } from "../redux/cardSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Card = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const result = useSelector((state) => state.card.card);
  console.log(result);

  useEffect(() => {
    dispatch(getAllCardThunk());
  }, []);

  function showPdf(p) {
    if (!token) {
      toast.error("Please Login First to Download The Course");
    } else {
      window.open(`http://localhost:8000/cards/${p}`);
    }
  }

  let token = localStorage.getItem("token");

  async function handleDelete(id) {
    if (token) {
      await dispatch(deleteCardThunk(id)).unwrap();
      dispatch(getAllCardThunk());
    } else {
      toast.error("Login first");
    }
  }
  return (
    <>
      {result && result.length > 0 ? (
        result.map((res, index) => (
          <div
            className="card lg:w-[250px] md:w-[250px] sm:w-[250px] xs:w-[350px] p-2 shadow-md shadow-white text-white flex flex-col gap-2"
            key={index}
          >
            <div className="img w-full rounded-xl">
              <Link
                to={`/update/${res._id}`}
                className="absolute text-3xl left-2 top-2 text-white rounded-full"
              >
                <MdEdit />
              </Link>
              <Link
                className="absolute text-3xl right-2 top-2 text-black"
                onClick={() => handleDelete(res._id)}
              >
                <TiDeleteOutline />
              </Link>
              <img
                src="/teacher2.png"
                alt="coding image"
                className="rounded-xl"
              />
            </div>

            <div className="title capitalize lg:text-2xl md:text-lg">
              Course:{res.course}
            </div>

            <div className="about_course truncate">{res.content}</div>

            <div className="button text-end flex justify-around items-center">
              <div className="name capitalize text-[10px]">By: {res.owner}</div>

              <button
                className="btn btn-error md:btn-sm capitalize lg:text-sm md:text-[10px] sm:text-[10px] "
                onClick={() => showPdf(res.pdf)}
              >
                Download PDF
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1>no data available</h1>
      )}
    </>
  );
};

export default Card;
