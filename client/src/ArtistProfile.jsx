
function ArtistProfile({name,description, imageUrl}) {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <div className="bg-gray-100 p-4 mb-4 rounded-lg">
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded-lg mb-4 overflow-hidden">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={`${name} profile`}
              className="w-full h-full object-cover"
            />
          ) : null}
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <div className="mb-4">
        {description}
      </div>
    </div>
  );
}

export default ArtistProfile