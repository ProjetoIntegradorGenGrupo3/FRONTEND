

function Sobre() {
    return (
        <>
            <div className="flex flex-col md:flex-row m-20 border border-gray-100 rounded shadow p-3">
  <div className="md:w-1/3">
    <img src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg" className="rounded mx-auto" alt="" width="130" height="130"/>
  </div>
  <div className="md:w-2/3 text-gray-700 mt-4 md:mt-0 ml-4">
    <h2 className="font-bold text-2xl text-grey-900">Erin Lindford</h2>
    <div className="text-sm">Product Engineer</div>

    <p className="mt-4 text-sm">
      Mini descrição sobre Erin Lindford e suas responsabilidades. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    </p>

    <div className="flex justify-end mt-4">
      <a href="https://github.com/ErinLindford" target="_blank" className="mr-4">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded">
          GitHub
        </button>
      </a>
      <a href="https://www.linkedin.com/in/erinlindford" target="_blank">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          LinkedIn
        </button>
      </a>
    </div>
  </div>
</div>

        </>
    );
}

export default Sobre