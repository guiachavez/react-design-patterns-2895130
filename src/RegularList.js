export const RegularList = ({
	items,
	resourceName,
	itemComponent: ItemComponent,
}) => {
	return (
		<>
		{items.map((item, i) => (
			console.log(item)
		))}

		{items.map((item, i) => (
			<ItemComponent key={i} {...{[resourceName]: item}} />
			//<ItemComponent key={i} person={item} />
		))}
		</>
	)
}