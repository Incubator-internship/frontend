createPost: builder.mutation<CreatePostResponse, FormData>({
      query: body => ({
        body,
        formdData: true,
        method: 'POST',
        url: '/v1/posts/post',
      }),
    }),


    createPost: builder.mutation<any, any>({
          query: photos => {
            const bodyFormData = new FormData()
    
            bodyFormData.append('photos', photos)
            console.log({ bodyFormData, photos })
    
            return {
              body: { bodyFormData },
              formData: true, //add this line 👈
              headers: {
                'Content-Type': 'multipart/form-data;',
              },
              method: 'POST',
              url: '/v1/posts/post',
            }
          },



