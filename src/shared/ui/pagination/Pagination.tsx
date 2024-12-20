import { useMemo } from 'react'

import ArrowLeft from '@/shared/assets/icons/ArrowLeft'
import ArrowRight from '@/shared/assets/icons/ArrowRight'
import { generatePagination } from '@/shared/ui/pagination/generatePagination'
import { Select } from '@/shared/ui/select'
import { Typography } from '@/shared/ui/typography'

import s from './pagination.module.scss'

type Props = {
  changeItemsPerPage: (count: string) => void
  currentPage: number | undefined
  handlePageChange: (page: number) => void
  itemsPerPage: number
  totalItems: number | undefined
  totalPages: number | undefined
}

export const Pagination = ({
  changeItemsPerPage,
  currentPage = 1,
  handlePageChange,
  itemsPerPage,
  totalPages = 1,
}: Props) => {
  const { pages } = useMemo(() => {
    return generatePagination(currentPage, totalPages)
  }, [currentPage, totalPages])

  return (
    <div className={s.pagination}>
      <div className={s.paginationLeft}>
        <button
          className={s.navigationButton}
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          type={'button'}
        >
          <ArrowLeft />
        </button>
        {pages.map((page, index) =>
          typeof page === 'string' ? (
            <Typography
              as={'span'}
              className={s.paginationEllipsis}
              key={`${index}-${page}`}
              variant={'body2'}
            >
              {page}
            </Typography>
          ) : (
            typeof page === 'number' && (
              <Typography
                as={'button'}
                className={
                  page === currentPage
                    ? `${s.paginationButton} ${s.activePageButton}`
                    : s.paginationButton
                }
                key={page}
                onClick={() => handlePageChange(page)}
                variant={'body2'}
              >
                {page}
              </Typography>
            )
          )
        )}
        <button
          className={s.navigationButton}
          disabled={currentPage === totalPages || currentPage > totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          type={'button'}
        >
          <ArrowRight />
        </button>
      </div>
      <div className={s.paginationRight}>
        <Typography as={'span'} variant={'body2'}>
          Показать
        </Typography>
        <Select
          className={s.paginationSelect}
          defaultValue={itemsPerPage.toString()}
          items={[
            { title: '5', value: '5' },
            { title: '10', value: '10' },
            { title: '20', value: '20' },
          ]}
          onValueChange={changeItemsPerPage}
          variant={'wide'}
        />
        <Typography as={'span'} variant={'body2'}>
          на странице
        </Typography>
      </div>
    </div>
  )
}
