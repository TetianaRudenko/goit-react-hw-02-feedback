import styled from '@emotion/styled';

export const FeedbackList = styled.ul`
  display: flex;
  gap: 16px;
  margin-top: 30px;

`

export const FeedbackButton = styled.button`
  cursor: pointer;
  padding: 8px 12px;
  border: 1px solid #00b09b;
  border-radius: 15% 85% 17% 83% / 69% 20% 80% 31% ;
  box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.15);
  text-transform: capitalize;
  font-size: 30px;
  color:#005349;
  background: linear-gradient(to left, #00b09b, #96c93d);

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);,
        background 250ms cubic-bezier(0.4, 0, 0.2, 1);,
        border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);;

  &:hover,
  &:focus,
  &:active {
    color: #628100;
    background: #96c93d;
    border-color: #96c93d;
  }
`