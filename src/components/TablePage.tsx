import * as React from 'react'

interface Props {
  name?: string
}
export class TablePage extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <div className="table">
        <button name="Add Row" />
      </div>
    )
  }
}