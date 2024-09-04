import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function ConcertCard({
  concertTitle,
  artistName,
  concertGenre,
  imageUrl,
  onClick,
}) {
  return (
    <Card className="mt-6 w-96 cursor-pointer" onClick={onClick}>
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={imageUrl}
          alt={concertTitle}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {concertTitle}
        </Typography>
        <Typography className="text-sm text-gray-500 mb-2">
          Artist: {artistName}
        </Typography>
        <Typography className="text-sm text-gray-500">
          Genre: {concertGenre}
        </Typography>
      </CardBody>
    </Card>
  );
}
