import avatar1 from '@/shared/assets/images/avatars/avatar1.webp'
import image1 from '@/shared/assets/images/publicImages/image1.webp'
import image2 from '@/shared/assets/images/publicImages/image2.webp'
import image3 from '@/shared/assets/images/publicImages/image3.webp'
import image4 from '@/shared/assets/images/publicImages/image4.webp'
import photo1 from '@/shared/assets/images/userProfile/photo1.webp'
import photo2 from '@/shared/assets/images/userProfile/photo2.webp'
import photo3 from '@/shared/assets/images/userProfile/photo3.webp'
import photo4 from '@/shared/assets/images/userProfile/photo4.webp'

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
            imgProfile: photo3.src,
            urlProfile: 'Profile Answer 1',
          },
          datePost: '10 Hours ago',
          id: '1',
        },
        {
          answer: 'Second answer - Second answer - Second answer',
          dataPost: {
            imgProfile: photo1.src,
            urlProfile: 'Profile Answer 2',
          },
          datePost: '11 Hours ago',
          id: '2',
        },
      ],
      comment:
        'First Comment - First Comment - First Comment - First Comment - First Comment - First Comment - First Comment -First Comment - First Comment - First Comment',
      dataPost: {
        imgProfile: photo3.src,
        urlProfile: 'Profile Comment 1',
      },
      dateComment: '13 Hours ago',
      id: '1',
    },
  ],
  dataPost: {
    imgProfile: avatar1.src,
    urlProfile: 'Profile1',
  },
  datePost: '2024-12-13',
  id: '1',
  imagePost: [
    {
      imgPost: image1.src,
    },
    {
      imgPost: image2.src,
    },
    {
      imgPost: image3.src,
    },
    {
      imgPost: image4.src,
    },
  ],
  likesPost: [
    {
      imgProfile: photo1.src,
    },
    {
      imgProfile: photo2.src,
    },
    {
      imgProfile: photo3.src,
    },
    {
      imgProfile: photo4.src,
    },
  ],
}
