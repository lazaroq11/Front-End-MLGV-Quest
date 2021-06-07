import React, { useState, Fragment } from 'react'
import {EditGroupForm} from '../forms/EditGroupForm'
import GroupTable from '../tables/GroupTable'
import '../../App.css';
import { AddGroup } from '../forms/AddGroup';

const GroupFluxo = () => {

	const groupsData = []

	const initialFormState = { id: null, name: '', descripition: '', at: '' }

	const [ groups, setGroups ] = useState(groupsData)
	const [ currentGroup, setCurrentGroup ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	const addGroup = group => {
		group.id = groups.length + 1
		setGroups([ ...groups, group ])
	}

	const deleteGroup = id => {
		setEditing(false)
		setGroups(groups.filter(group => group.id !== id))
	}

	const updateGroup = (id, updatedGroup) => {
		setEditing(false)
		setGroups(groups.map(group => (group.id === id ? updatedGroup : group)))
	}

	const editRow = group => {
		setEditing(true)
		setCurrentGroup({ id: group.id, name: group.name, descripition: group.descripition, at: group.at })
	}

	return (
		<div className="app">
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h1>Editar Grupo</h1>
							<EditGroupForm
								editing={editing}
								setEditing={setEditing}
								currentGroup={currentGroup}
								updateGroup={updateGroup}
							/>
						</Fragment>
					) : (
						<Fragment>
							<AddGroup addGroup={addGroup} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<GroupTable groups={groups} editRow={editRow} deleteGroup={deleteGroup} />
				</div>
			</div>
		</div>
	)
}

export default GroupFluxo;