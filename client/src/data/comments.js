export const getCommentsData = async () => {
    return [
      {
        _id: "10",
        user: {
          _id: "a1",
          name: "Mohammad Rezaii",
        },
        desc: "it was a nice post, Thank you!",
        post: "1",
        parent: null,
        replyOnUser: null,
        createdAt: "Sun Apr 02 2023 10:09:21 GMT+0100",
      },
      {
        _id: "11",
        user: {
          _id: "b1",
          name: "Paul M. Williams",
        },
        desc: "a reply for Mohammad",
        post: "1",
        parent: "10",
        replyOnUser: "a",
        createdAt: "Sun Apr 02 2023 10:09:21 GMT+0100",
      },
      {
        _id: "12",
        user: {
          _id: "b2",
          name: "Paul M. Williams",
        },
        desc: "keep it up bro <3",
        post: "1",
        parent: null,
        replyOnUser: null,
        createdAt: "Sun Apr 02 2023 10:09:21 GMT+0100",
      },
      {
        _id: "13",
        user: {
          _id: "c1",
          name: "Jessica C. Stephens",
        },
        desc: "I'm always interested in your content :)",
        post: "1",
        parent: null,
        replyOnUser: null,
        createdAt: "Sun Apr 02 2023 10:09:21 GMT+0100",
      },
      {
        _id: "14",
        user: {
          _id: "c2",
          name: "Jones C. Stephens",
        },
        desc: "I'm always interested in your content :)",
        post: "1",
        parent: null,
        replyOnUser: null,
        createdAt: "Sun Apr 02 2023 10:09:21 GMT+0100",
      },
    ];
  };