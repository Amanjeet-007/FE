/* eslint-disable react/prop-types */
export default function Empty({ name, message, fnc }) {
  return (
    <div className="h-[55vh] flex items-center justify-center flex-col">
      <p className="text-2xl">{message}</p>
      <button
      className="emtbtn px-7 py-4 rounded-xl m-5 font-bold text-gray-700"
       onClick={() => fnc()}>Add {name}</button>
    </div>
  );
}
