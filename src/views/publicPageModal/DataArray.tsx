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

export const DataArray: PostType = {
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
}
