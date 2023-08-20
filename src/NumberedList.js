export const NumberedList = ({
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
            <>
                <h3>{i + 1}</h3>
                <ItemComponent key={i} {...{[resourceName]: item}} />
            </>
			
			//<ItemComponent key={i} person={item} />
		))}
		</>
	)
}