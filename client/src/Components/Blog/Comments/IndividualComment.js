import React from "react";
import images from "../../../constants/images";
import { Skeleton } from "antd";
import { RiMessage2Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import CommentForm from "./CommentForm";

const IndividualComment = ({
  data,
  logginUserId,
  affectedComment,
  setAffectedComment,
  addComment,
  parentId = null,
  updateComment,
  deletComment,
  replies = []
}) => {
  const user = useSelector((state) => state.userLogin);

  const isCommentBelongToUser = logginUserId === data.user._id;
// logics for replying
  const isReplying = affectedComment && affectedComment.type === 'replying' && affectedComment._id === data._id;
const repliedCommentId = parentId ? parentId : data._id;
const replyOnUserId = data.user._id;
// logic for editing
const isEditing = affectedComment && affectedComment.type === 'editing' && affectedComment._id === data._id;

console.log('replies', replies);
  return (
    <>
      {data ? (
        <div
          className="flex flex-nowrap items-start gap-x-3 bg-[#f2f4f5] p-3 rounded-lg"
          key={data?.id}
        >
          <img
            src={images.User1}
            alt="user profile"
            className="w-9 h-9 object-cover rounded-full"
          />
          <div className="flex-1 flex flex-col">
            <h5 className="font-bold text-dark-hard text-xs lg:text-sm">
              {data?.user?.name}
            </h5>
            <span className="text-xs text-dark-light">
              {new Date(data?.createdAt).toLocaleDateString("en-us", {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
              })}
            </span>
            {
                !isEditing && (
                    <p className="font-opensans mt-[10px] text-dark-light">
                    {data?.desc}
                  </p>
                )
            }
            {
                isEditing && (
                    <CommentForm 
                    btnLabel='Update' formSubmitHandler={(value) => updateComment(value, data._id)}
                    formCancleHandler={() => setAffectedComment(null)}
                    initialText={data.desc}
                    />
                )
            }
            {/* actions */}
            <div className="flex items-center gap-x-3 text-dark-light font-roboto text-sm mt-3 mb-3">
              {user?.userInfo && (
                <button 
                onClick={() => setAffectedComment({
                    type: "replying",
                    _id: data._id
                })}
                className="flex items-center space-x-2">
                  <RiMessage2Line className="w-4 h-auto" />
                  <span>Reply</span>
                </button>
              )}
              {isCommentBelongToUser && (
                <>
                  <button
                   onClick={() => setAffectedComment({
                    type: "editing",
                    _id: data._id
                })}
                   className="flex items-center space-x-2">
                    <AiOutlineEdit className="w-4 h-auto" />
                    <span>Edit</span>
                  </button>
                  <button 
                  onClick={() => deletComment(data._id)}
                  className="flex items-center space-x-2">
                    <MdOutlineDelete className="w-4 h-auto" />
                    <span>Delete</span>
                  </button>
                </>
              )}
            </div>
            {/* replies */}
            {
              isReplying && (
                <CommentForm 
                formCancleHandler={() => setAffectedComment(null)}
                btnLabel='Reply' 
                formSubmitHandler={(value) => addComment(value, repliedCommentId, replyOnUserId )}/>
              )  
            }
            {
                replies.length > 0 && (
                    <div>
                        {
                            replies.map((reply) => {
                                return <IndividualComment key={reply._id}
                                data={reply}
                                logginUserId={logginUserId}
                                affectedComment={affectedComment}
                                setAffectedComment={setAffectedComment}
                                addComment={addComment}
                                updateComment={updateComment}
                                deletComment={deletComment}
                                replies={[]}
                                parentId={data._id}
                                  />
                            })
                        }
                    </div>
                )
            }
          </div>
        </div>
      ) : (
        <Skeleton active />
      )}
    </>
  );
};

export default IndividualComment;
