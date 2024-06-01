export interface Props {
  children: React.ReactElement
  condition: boolean
  wrapper: (children: React.ReactElement) => React.ReactElement
}

export const ConditionalWrapper: React.FC<Props> = ({
  children,
  condition,
  wrapper,
}) => (condition ? wrapper(children) : children)
