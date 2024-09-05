import { useState } from "react";
import axios from "axios";
import { Input, Button } from "@material-tailwind/react";


export function InputWithButton( {concertNum, onReviewAdded} ) {
    const [conReview, setConReview] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onChange = ({ target }) => setConReview(target.value);
   
    // const handleSubmit = async () => {
    //     if(!conReview.trim()) return;

    //     const user_num = localStorage.getItem('user_num');
        
    //     if(!user_num){
    //         alert('로그인 필요함');
    //         return;
    //     }

    //     setIsSubmitting(true);
    //     try{
    //         const response = await axios.post('http://localhost:8080/concert/review', {
    //             user_num: parseInt(user_num),
    //             concert_num: concertNum,
    //             creview_content: conReview
    //         });

    //         if(response.data.msg === "리뷰를 성공적으로 작성했습니다."){
    //             onReviewAdded(response.data.data);
    //             setConReview('');
    //         }

    //     }catch (error){
    //         console.error('error submitting review: ', error);
    //     } finally{
    //         setIsSubmitting(false);
    //     }

    // }

    const handleSubmit = async () => {
        if(!conReview.trim()) return;
        const user_num = localStorage.getItem('user_num');
        if(!user_num){
            alert('로그인 필요함');
            return;
        }
        setIsSubmitting(true);
        try{
            const response = await axios.post('http://localhost:8080/concert/review', {
                user_num: parseInt(user_num),
                concert_num: concertNum,
                creview_content: conReview
            }, { withCredentials: true });
            if(response.data.msg === "리뷰를 성공적으로 작성했습니다."){
                onReviewAdded(response.data.data);
                setConReview('');
            }
        }catch (error){
            console.error('error submitting review: ', error);
        } finally{
            setIsSubmitting(false);
        }
      }

    return (
      <div className="relative flex w-full max-w-[40rem] mx-auto">
        <Input
          type="text"
          label="Writing A review"
          value={conReview}
          onChange={onChange}
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          color={conReview ? "gray" : "blue-gray"}
          disabled={!conReview || isSubmitting}
          onClick={handleSubmit}
          className="!absolute right-1 top-1 rounded"
        >
          {isSubmitting ? '제출충..' : '입력'}
        </Button>
      </div>
    );
  };