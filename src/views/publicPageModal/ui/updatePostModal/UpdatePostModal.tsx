import React from 'react'
import { useForm } from 'react-hook-form'

import { useGetPostsIdQuery, useUpdatePostMutation } from '@/app/api/posts/postsApi'
import { maximumCharactersSchema } from '@/shared/model/schemas/schemas'
import { Button } from '@/shared/ui/button'
import { Carousel } from '@/shared/ui/carousel'
import { TextareaWithControl } from '@/shared/ui/textareaControl'
import { Typography } from '@/shared/ui/typography'
import clsx from 'clsx'
import { useSearchParams } from 'next/navigation'
import { z } from 'zod'

import s from './updatePostModal.module.scss'

type PostUpdateFormData = z.infer<typeof maximumCharactersSchema>

type Props = {
  setIsOpenEditModal: (isOpen: boolean) => void
}

export const UpdatePostModal = ({ setIsOpenEditModal }: Props) => {
  const searchParams = useSearchParams()
  const postId = +(searchParams.get('postId') ?? 0)
  const { data: postData } = useGetPostsIdQuery(postId)
  const [updatePost] = useUpdatePostMutation()
  const { control, handleSubmit, watch } = useForm<PostUpdateFormData>({
    defaultValues: {
      description: postData?.content,
    },
  })
  const descriptionValue = watch('description') || ''

  const onSubmitForm = handleSubmit(async data => {
    await updatePost({ content: data.description, id: postId })
    setIsOpenEditModal(false)
  })

  return (
    <div className={s.updateModal}>
      <Carousel photos={postData?.photos ?? []} />
      <div className={s.updateContent}>
        <form className={s.updateForm} onSubmit={onSubmitForm}>
          <div className={s.updateTextarea}>
            <TextareaWithControl
              control={control}
              label={'Add publication descriptions'}
              maxLength={500}
              name={'description'}
            />
            <Typography
              className={clsx(s.countSymbol, { [s.maxCharacters]: descriptionValue.length >= 500 })}
              variant={'body2'}
            >
              {`${descriptionValue.length}/500`}
            </Typography>
          </div>
          <Button className={s.updateBtn} type={'submit'}>
            Save Changes
          </Button>
        </form>
      </div>
    </div>
  )
}
