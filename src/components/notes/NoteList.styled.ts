import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  /* display: flex;
  justify-content: space-between; */
  display: inline-grid;
  grid-auto-rows: min-content;
  grid-template-columns: minmax(100px, 1fr) 4fr;
  align-items: stretch;
  /* display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  padding: 50px 70px;
`
