export const Cast = ({ key, castList }) => {
	return (
		<>
			<label>
				<b>Search for:</b> {key()}
			</label>
			<div
				style={{
					display: 'grid',
					'grid-template-columns': '1fr 1fr 1fr 1fr',
					gap: '15px',
					'text-align': 'center',
					'line-height': '100%',
				}}
			>
				<For each={castList()}>
					{(item) => (
						<article
							style={{
								'margin-bottom': '15px',
							}}
						>
							<img src={`./images/${item.slug}_tn.svg`} alt={item.name} />
							<div
								style={{
									'font-weight': 'bold',
									'margin-top': '1em',
								}}
							>
								{item.name}
							</div>
						</article>
					)}
				</For>
			</div>
		</>
	)
}
