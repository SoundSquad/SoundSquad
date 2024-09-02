const MySquadReview = () => {


    return (
    <section>
      <div className="mx-5 flex flex-row-reverse justify-end text-2xl">
        <label htmlFor="score"></label>
        <input
          type="radio"
          className="peer hidden"
          id="value5"
          value="5"
          name="score"
        />
        <label
          htmlFor="value5"
          className="cursor-pointer text-gray-400 peer-hover:text-yellow-400 peer-checked:text-yellow-600"
        >
          ★
        </label>
        <input
          type="radio"
          className="peer hidden"
          id="value4"
          value="4"
          name="score"
        />
        <label
          htmlFor="value4"
          className="cursor-pointer text-gray-400 peer-hover:text-yellow-400 peer-checked:text-yellow-600"
        >
          ★
        </label>
        <input
          type="radio"
          className="peer hidden"
          id="value3"
          value="3"
          name="score"
        />
        <label
          htmlFor="value3"
          className="cursor-pointer text-gray-400 peer-hover:text-yellow-400 peer-checked:text-yellow-600"
        >
          ★
        </label>
        <input
          type="radio"
          className="peer hidden"
          id="value2"
          value="2"
          name="score"
        />
        <label
          htmlFor="value2"
          className="cursor-pointer text-gray-400 peer-hover:text-yellow-400 peer-checked:text-yellow-600"
        >
          ★
        </label>
        <input
          type="radio"
          className="peer hidden"
          id="value1"
          value="1"
          name="score"
        />
        <label
          htmlFor="value1"
          className="cursor-pointer peer text-gray-400 peer-hover:text-yellow-400 peer-checked:text-yellow-600"
        >
          ★
        </label>
      </div>

    </section>
  );
};

export default MySquadReview;
