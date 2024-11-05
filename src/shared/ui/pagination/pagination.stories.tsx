import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Pagination } from '@/shared/ui/pagination/Pagination'

const meta = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const PaginationDefault: Partial<Story> = {
  render: () => {
    const [currentPageState, setCurrentPage] = useState(5)

    const handlePageChange = (page: number) => {
      setCurrentPage(page)
    }

    return (
      <Pagination
        changeItemsPerPage={() => {}}
        currentPage={currentPageState}
        handlePageChange={handlePageChange}
        itemsPerPage={5}
        totalItems={100}
        totalPages={20}
      />
    )
  },
}
