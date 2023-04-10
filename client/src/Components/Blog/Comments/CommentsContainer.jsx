import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import { getCommentsData } from "../../../data/comments";
import IndividualComment from "./IndividualComment";

const CommentsContainer = ({ className, logginUserId }) => {
  const [comments, setComments] = useState([]);
  const [affectedComment, setAffectedComment] = useState(null);

  const mainComments = comments.filter((comment) => comment.parent === null);

  useEffect(() => {
    (async () => {
      const commentsData = await getCommentsData();
      setComments(commentsData);
    })();
  }, []);

  
  function generateRandomId(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  const handleAddComment = (value, parent = null, replyOnUser = null) => {
    const newComment = {
      _id: generateRandomId(6),
      user: {
        _id: "a1",
        name: "Mohammad Rezaii",
      },
      desc: value,
      post: "1",
      parent: parent,
      replyOnUser: replyOnUser,
      createdAt: new Date().toISOString(),
    };

    setComments((current) => {
      return [newComment, ...current];
    });
    setAffectedComment(null)
  };
  const handleUpdateComment = (value, commentId) => {
const commnetToUpdate = comments.map((comment) => {
  if(comment._id === commentId){
    return {
     ...comment, desc: value
    }
  }
  return comment;
})
setComments(commnetToUpdate)
setAffectedComment(null)
  }

  const deleteCommentHandler = (commentId) => {
    const updateCommnet = comments.filter((comment) => comment._id !== commentId);

    setComments(updateCommnet);
  }
 
  const getAllReplyHanlder = (commentId) => {
    return comments.filter((comment) => {
      return comment.parent === commentId
    }).sort((a,b) => {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    })
  }
  return (
    <div className={`${className}`}>
      <CommentForm
        btnLabel="Send"
        formSubmitHandler={(value) => handleAddComment(value)}
      />
      <div className="space-y-4 mt-8">
        {mainComments.map((main) => {
          return (
            <IndividualComment
              key={main._id}
              data={main}
              logginUserId={logginUserId}
              affectedComment={affectedComment}
              setAffectedComment={setAffectedComment}
              addComment={handleAddComment}
              updateComment={handleUpdateComment}
              deletComment={deleteCommentHandler}
              replies={getAllReplyHanlder(main._id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentsContainer;
