import React, { memo, useEffect, useState } from "react";
import { axisExtraLengthFactor } from "../helpers";


function Axes({bbox, show}) { 

	const [extraLength, setExtraLength] = useState(0);

	useEffect(()=>{

		const extra = Math.max(bbox.xmax, bbox.ymax, bbox.zmax) * axisExtraLengthFactor;
		setExtraLength(extra);

	}, [bbox])


	return (
		<group id="axes" render={show}>
			<shape isPickable="false" DEF="axis_line_x">
				<indexedLineSet index="0 1 -1">
					<coordinate point={` ${bbox.xmin - extraLength } 0 0, ${bbox.xmax + extraLength} 0 0 `} color="1 0 0, 1 0 0" />
				</indexedLineSet>
				<appearance DEF="red">
					<material diffuseColor="0 0 0" emissiveColor="0.7 0 0" />
					<depthmode readOnly="false" />
					<lineProperties DEF='TestLineProperties' linewidthScaleFactor='2' />
				</appearance>
			</shape>
			<transform translation={`${bbox.xmax + extraLength} 0 0`}>
				<transform rotation="0 0 1 -1.57079632679">
					<shape isPickable="false" DEF="axis_arrow_x">
						<cone DEF="Arrowconex" bottomRadius={extraLength/10} height={extraLength/2} subdivision="16" />
						<appearance USE="red" />
					</shape>
				</transform>
			</transform>
			<transform translation={`${bbox.xmax + 1.5*extraLength} 0 0`}>
				<billboard axisOfRotation="0 0 0">
					<transform translation="0 0 0" scale={`${2*axisExtraLengthFactor*extraLength} ${2*axisExtraLengthFactor*extraLength} ${2*axisExtraLengthFactor*extraLength}`}>
						<shape isPickable="false" DEF="axis_label_x">
						<text string="x" solid="false">
							<fontstyle family="'Serif'"/>
						</text>
						<appearance DEF="gray">
							<material diffuseColor="0.15 0.15 0.15" emissiveColor="0.15 0.15 0.15" />
						</appearance>
						</shape>
					</transform>
				</billboard>
			</transform>
			<shape isPickable="false" DEF="axis_line_y">
				<indexedLineSet index="0 1 -1">
					<coordinate point={` 0 ${bbox.ymin - extraLength} 0, 0 ${bbox.ymax + extraLength} 0 `} color="0 1 0, 0 1 0" />
				</indexedLineSet>
				<appearance DEF="green">
					<material diffuseColor="0 0 0" emissiveColor="0 0.7 0" />
					<depthmode readOnly="false" />
					<lineProperties linewidthScaleFactor="2.0" />
				</appearance>
			</shape>
			<transform translation={`0 ${bbox.ymax + extraLength} 0`}>
				<transform rotation="0 1 0 -1.57079632679">
					<shape isPickable="false" DEF="axis_arrow_y">
					<cone DEF="Arrowconey" bottomRadius={extraLength/10} height={extraLength/2} subdivision="16" />
						<appearance USE="green" />
					</shape>
				</transform>
			</transform>
			<transform translation={` 0 ${bbox.ymax + 1.5*extraLength} 0`}>
				<billboard axisOfRotation="0 0 0">
					<transform translation="0 0 0" scale={`${2*axisExtraLengthFactor*extraLength} ${2*axisExtraLengthFactor*extraLength} ${2*axisExtraLengthFactor*extraLength}`}>
						<shape isPickable="false" DEF="axis_label_y">
						<text string="y" solid="false">
							<fontstyle family="'Serif'"/>
						</text>
						<appearance DEF="gray">
							<material diffuseColor="0.15 0.15 0.15" emissiveColor="0.15 0.15 0.15" />
						</appearance>
						</shape>
					</transform>
				</billboard>
			</transform>
			<shape isPickable="false" DEF="axis_line_z">
				<indexedLineSet index="0 1 -1">
					<coordinate point={` 0 0 ${bbox.zmin - extraLength}, 0 0 ${bbox.zmax + extraLength} `} color="0 0 1, 0 0 1" />
				</indexedLineSet>
				<appearance DEF="blue">
					<material diffuseColor="0 0 0" emissiveColor="0 0 0.7" />
					<depthmode readOnly="false" />
					<lineProperties linewidthScaleFactor="2.0" />
				</appearance>
			</shape>
			<transform translation={` 0 0 ${bbox.zmax + extraLength} `}>
				<transform rotation="1 0 0 +1.57079632679">
					<shape isPickable="false" DEF="axis_arrow_z">
					<cone DEF="Arrowconez" bottomRadius={extraLength/10} height={extraLength/2} subdivision="16" />
						<appearance USE="blue" />
					</shape>
				</transform>
			</transform>
			<transform translation={` 0 0 ${bbox.zmax + 1.5*extraLength} `}>
				<billboard axisOfRotation="0 0 0">
					<transform translation="0 0 0" scale={`${2*axisExtraLengthFactor*extraLength} ${2*axisExtraLengthFactor*extraLength} ${2*axisExtraLengthFactor*extraLength}`}>
						<shape isPickable="false" DEF="axis_label_z">
						<text string="z" solid="false">
							<fontstyle family="'Serif'"/>
						</text>
						<appearance DEF="gray">
							<material diffuseColor="0.15 0.15 0.15" emissiveColor="0.15 0.15 0.15" />
						</appearance>
						</shape>
					</transform>
				</billboard>
			</transform>
		</group>
	);


};

export default memo(Axes);