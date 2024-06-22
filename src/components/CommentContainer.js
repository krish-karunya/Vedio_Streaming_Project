import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className='flex shadow-lg p-2 rounded-lg  bg-slate-200'>
      <img
        src='https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png'
        alt='userImg'
        className='h-8 my-2'
      />
      <div className='px-3 my-2'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const commentData = [
  {
    name: "krishna",
    text: "Lorem ipsam dolar sit amet, constectur adip",
    replies: [
      {
        name: "krishna",
        text: "Lorem ipsam dolar sit amet, constectur adip",
        replies: [
          {
            name: "krishna",
            text: "Lorem ipsam dolar sit amet, constectur adip",
            replies: [
              {
                name: "krishna",
                text: "Lorem ipsam dolar sit amet, constectur adip",
                replies: [
                  {
                    name: "krishna",
                    text: "Lorem ipsam dolar sit amet, constectur adip",
                    replies: [
                      {
                        name: "krishna",
                        text: "Lorem ipsam dolar sit amet, constectur adip",
                        replies: [
                          {
                            name: "krishna",
                            text: "Lorem ipsam dolar sit amet, constectur adip",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "krishna",
        text: "Lorem ipsam dolar sit amet, constectur adip",
        replies: [
          {
            name: "krishna",
            text: "Lorem ipsam dolar sit amet, constectur adip",
            replies: [],
          },
          {
            name: "krishna",
            text: "Lorem ipsam dolar sit amet, constectur adip",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "krishna",
    text: "Lorem ipsam dolar sit amet, constectur adip",
    replies: [
      {
        name: "krishna",
        text: "Lorem ipsam dolar sit amet, constectur adip",
        replies: [],
      },
      {
        name: "krishna",
        text: "Lorem ipsam dolar sit amet, constectur adip",
        replies: [],
      },
      {
        name: "krishna",
        text: "Lorem ipsam dolar sit amet, constectur adip",
        replies: [],
      },
    ],
  },
  {
    name: "krishna",
    text: "Lorem ipsam dolar sit amet, constectur adip",
    replies: [
      {
        name: "krishna",
        text: "Lorem ipsam dolar sit amet, constectur adip",
        replies: [],
      },
      {
        name: "krishna",
        text: "Lorem ipsam dolar sit amet, constectur adip",
        replies: [],
      },
    ],
  },
  {
    name: "krishna",
    text: "Lorem ipsam dolar sit amet, constectur adip",
    replies: [],
  },
  {
    name: "krishna",
    text: "Lorem ipsam dolar sit amet, constectur adip",
    replies: [],
  },
];
const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className='pl-5 border border-l-black ml-5'>
        <CommentList comments={comment.replies} key={index} />
      </div>
    </div>
  ));
};
const CommentContainer = () => {
  return (
    <div className='m-5 p-2 w-full'>
      <h1 className='font-bold text-2xl '>Comments:</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
