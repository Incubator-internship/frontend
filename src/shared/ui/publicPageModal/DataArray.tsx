export type PostType = {
  comments: CommentsArray[]
  dataPost: DataPost
  datePost: string
  id: string
  imagePost: ImagePost[]
  likesPost: LikesPost[]
}

export type CommentsArray = {
  answers: Answers[]
  comment: string
  dataPost: DataPost
  dateComment: string
  id: string
}

export type Answers = {
  answer: string
  dataPost: DataPost
  datePost: string
  id: string
}

export type DataPost = {
  imgProfile: string
  urlProfile: string
}

export type LikesPost = {
  imgProfile: string
}
export type ImagePost = {
  imgPost: string
}

export const DataArray: PostType[] = [
  {
    comments: [
      {
        answers: [
          {
            answer: 'First answer - First answer - First answer',
            dataPost: {
              imgProfile: 'https://via.placeholder.com/150?text=Profile+1',
              urlProfile: 'ProfileProfile 1',
            },
            datePost: '10 Hours ago',
            id: '1',
          },
          {
            answer: 'Second answer - Second answer - Second answer',
            dataPost: {
              imgProfile: 'https://via.placeholder.com/150?text=Profile+1',
              urlProfile: 'ProfileProfile 1',
            },
            datePost: '11 Hours ago',
            id: '2',
          },
        ],
        comment:
          'First Comment - First Comment - First Comment - First Comment - First Comment - First Comment - First Comment -First Comment - First Comment - First Comment',
        dataPost: {
          imgProfile: 'https://via.placeholder.com/150?text=Profile+1',
          urlProfile: 'ProfileProfile 1',
        },
        dateComment: '13 Hours ago',
        id: '1',
      },
    ],
    dataPost: {
      imgProfile: 'https://via.placeholder.com/150?text=Profile+3',
      urlProfile: 'Profile1',
    },
    datePost: '2024-12-13',
    id: '1',
    imagePost: [
      {
        imgPost: 'https://via.placeholder.com/800x400?text=Image+1',
      },
      {
        imgPost: 'https://via.placeholder.com/800x400?text=Image+2',
      },
      {
        imgPost: 'https://via.placeholder.com/800x400?text=Image+3',
      },
      {
        imgPost: 'https://via.placeholder.com/800x400?text=Image+4',
      },
      {
        imgPost: 'https://via.placeholder.com/800x400?text=Image+5',
      },
    ],
    likesPost: [
      {
        imgProfile: 'https://via.placeholder.com/150?text=Profile+4',
      },
      {
        imgProfile: 'https://via.placeholder.com/150?text=Profile+5',
      },
      {
        imgProfile: 'https://via.placeholder.com/150?text=Profile+5',
      },
      {
        imgProfile: 'https://via.placeholder.com/150?text=Profile+5',
      },
    ],
  },
  {
    comments: [
      {
        answers: [],
        comment:
          'First Comment - First Comment - First Comment - First Comment - First Comment - First Comment - First Comment -First Comment - First Comment - First Comment',
        dataPost: {
          imgProfile: 'https://via.placeholder.com/150?text=Profile+1',
          urlProfile: 'ProfileProfile 1',
        },
        dateComment: '13 Hours ago',
        id: '1',
      },
      {
        answers: [],
        comment:
          'Second Comment - Second Comment - Second Comment - Second Comment - Second Comment - Second Comment - Second Comment',
        dataPost: {
          imgProfile: 'https://via.placeholder.com/150?text=Profile+2',
          urlProfile: 'ProfileProfile 2',
        },

        dateComment: '2 Hours ago',
        id: '2',
      },
    ],
    dataPost: {
      imgProfile: 'https://via.placeholder.com/150?text=Profile+3',
      urlProfile: 'Profile2',
    },
    datePost: '2024-12-14',
    id: '2',
    imagePost: [
      {
        imgPost: 'https://via.placeholder.com/800x400?text=Image+1',
      },
      {
        imgPost: 'https://via.placeholder.com/800x400?text=Image+2',
      },
      {
        imgPost: 'https://via.placeholder.com/800x400?text=Image+3',
      },
      {
        imgPost: 'https://via.placeholder.com/800x400?text=Image+4',
      },
      {
        imgPost: 'https://via.placeholder.com/800x400?text=Image+5',
      },
    ],
    likesPost: [
      {
        imgProfile: 'https://via.placeholder.com/150?text=Profile+4',
      },
      {
        imgProfile: 'https://via.placeholder.com/150?text=Profile+5',
      },
    ],
  },
  // {
  //   comments: [
  //     {
  //       answers: [],
  //       comment:
  //         'First Comment - First Comment - First Comment - First Comment - First Comment - First Comment - First Comment -First Comment - First Comment - First Comment',
  //       dataPost: {
  //         imgProfile: 'https://via.placeholder.com/150?text=Profile+1',
  //         urlProfile: 'ProfileProfile 1',
  //       },
  //       dateComment: '13 Hours ago',
  //       id: '1',
  //     },
  //     {
  //       answers: [],
  //       comment:
  //         'Second Comment - Second Comment - Second Comment - Second Comment - Second Comment - Second Comment - Second Comment',
  //       dataPost: {
  //         imgProfile: 'https://via.placeholder.com/150?text=Profile+2',
  //         urlProfile: 'ProfileProfile 2',
  //       },

  //       dateComment: '2 Hours ago',
  //       id: '2',
  //     },
  //     {
  //       answers: [],
  //       comment:
  //         'Third Comment - Third Comment - Third Comment - Third Comment - Third Comment - Third Comment - Third Comment',
  //       dataPost: {
  //         imgProfile: 'https://via.placeholder.com/150?text=Profile+2',
  //         urlProfile: 'ProfileProfile 2',
  //       },

  //       dateComment: '2 Hours ago',
  //       id: '3',
  //     },
  //   ],
  //   dataPost: {
  //     imgProfile: 'https://via.placeholder.com/150?text=Profile+3',
  //     urlProfile: 'Profile3',
  //   },
  //   datePost: '2024-12-15',
  //   id: '3',
  //   imagePost: 'https://via.placeholder.com/800x400?text=Image+3',
  //   likesPost: [
  //     {
  //       imgProfile: 'https://via.placeholder.com/150?text=Profile+4',
  //     },
  //     {
  //       imgProfile: 'https://via.placeholder.com/150?text=Profile+5',
  //     },
  //     {
  //       imgProfile: 'https://via.placeholder.com/150?text=Profile+4',
  //     },
  //     {
  //       imgProfile: 'https://via.placeholder.com/150?text=Profile+4',
  //     },
  //     {
  //       imgProfile: 'https://via.placeholder.com/150?text=Profile+4',
  //     },
  //     {
  //       imgProfile: 'https://via.placeholder.com/150?text=Profile+4',
  //     },
  //   ],
  // },
  // {
  //   comments: [
  //     {
  //       answers: [],
  //       comment:
  //         'First Comment - First Comment - First Comment - First Comment - First Comment - First Comment - First Comment -First Comment - First Comment - First Comment',
  //       dataPost: {
  //         imgProfile: 'https://via.placeholder.com/150?text=Profile+1',
  //         urlProfile: 'ProfileProfile 1',
  //       },
  //       dateComment: '13 Hours ago',
  //       id: '1',
  //     },
  //     {
  //       answers: [],
  //       comment:
  //         'Second Comment - Second Comment - Second Comment - Second Comment - Second Comment - Second Comment - Second Comment',
  //       dataPost: {
  //         imgProfile: 'https://via.placeholder.com/150?text=Profile+2',
  //         urlProfile: 'ProfileProfile 2',
  //       },

  //       dateComment: '2 Hours ago',
  //       id: '2',
  //     },
  //     {
  //       answers: [],
  //       comment:
  //         'Third Comment - Third Comment - Third Comment - Third Comment - Third Comment - Third Comment - Third Comment',
  //       dataPost: {
  //         imgProfile: 'https://via.placeholder.com/150?text=Profile+2',
  //         urlProfile: 'ProfileProfile 2',
  //       },

  //       dateComment: '2 Hours ago',
  //       id: '3',
  //     },
  //     {
  //       answers: [],
  //       comment:
  //         'Fourth Comment - Fourth Comment - Fourth Comment - Fourth Comment - Fourth Comment - Fourth Comment - Fourth Comment',
  //       dataPost: {
  //         imgProfile: 'https://via.placeholder.com/150?text=Profile+2',
  //         urlProfile: 'ProfileProfile 2',
  //       },

  //       dateComment: '2 Hours ago',
  //       id: '4',
  //     },
  //   ],
  //   dataPost: {
  //     imgProfile: 'https://via.placeholder.com/150?text=Profile+3',
  //     urlProfile: 'Profile4',
  //   },
  //   datePost: '2024-12-16',
  //   id: '4',
  //   imagePost: 'https://via.placeholder.com/800x400?text=Image+4',
  //   likesPost: [
  //     {
  //       imgProfile: 'https://via.placeholder.com/150?text=Profile+4',
  //     },
  //     {
  //       imgProfile: 'https://via.placeholder.com/150?text=Profile+5',
  //     },
  //   ],
  // },
  // {
  //   comments: [
  //     {
  //       answers: [],
  //       comment:
  //         'First Comment - First Comment - First Comment - First Comment - First Comment - First Comment - First Comment -First Comment - First Comment - First Comment',
  //       dataPost: {
  //         imgProfile: 'https://via.placeholder.com/150?text=Profile+1',
  //         urlProfile: 'ProfileProfile 1',
  //       },
  //       dateComment: '13 Hours ago',
  //       id: '1',
  //     },
  //     {
  //       answers: [],
  //       comment:
  //         'Second Comment - Second Comment - Second Comment - Second Comment - Second Comment - Second Comment - Second Comment',
  //       dataPost: {
  //         imgProfile: 'https://via.placeholder.com/150?text=Profile+2',
  //         urlProfile: 'ProfileProfile 2',
  //       },

  //       dateComment: '2 Hours ago',
  //       id: '2',
  //     },
  //     {
  //       answers: [],
  //       comment:
  //         'Third Comment - Third Comment - Third Comment - Third Comment - Third Comment - Third Comment - Third Comment',
  //       dataPost: {
  //         imgProfile: 'https://via.placeholder.com/150?text=Profile+2',
  //         urlProfile: 'ProfileProfile 2',
  //       },

  //       dateComment: '2 Hours ago',
  //       id: '3',
  //     },
  //     {
  //       answers: [],
  //       comment:
  //         'Fourth Comment - Fourth Comment - Fourth Comment - Fourth Comment - Fourth Comment - Fourth Comment - Fourth Comment',
  //       dataPost: {
  //         imgProfile: 'https://via.placeholder.com/150?text=Profile+2',
  //         urlProfile: 'ProfileProfile 2',
  //       },

  //       dateComment: '2 Hours ago',
  //       id: '4',
  //     },
  //     {
  //       answers: [],
  //       comment:
  //         'Fifth Comment - Fifth Comment - Fifth Comment - Fifth Comment - Fifth Comment - Fifth Comment - Fifth Comment',
  //       dataPost: {
  //         imgProfile: 'https://via.placeholder.com/150?text=Profile+2',
  //         urlProfile: 'ProfileProfile 2',
  //       },

  //       dateComment: '2 Hours ago',
  //       id: '5',
  //     },
  //   ],
  //   dataPost: {
  //     imgProfile: 'https://via.placeholder.com/150?text=Profile+3',
  //     urlProfile: 'Profile5',
  //   },
  //   datePost: '2024-12-17',
  //   id: '5',
  //   imagePost: 'https://via.placeholder.com/800x400?text=Image+5',
  //   likesPost: [
  //     {
  //       imgProfile: 'https://via.placeholder.com/150?text=Profile+4',
  //     },
  //     {
  //       imgProfile: 'https://via.placeholder.com/150?text=Profile+5',
  //     },
  //   ],
  // },
]
