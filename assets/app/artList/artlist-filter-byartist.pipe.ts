import { Pipe , PipeTransform } from 'angular2/core';
import { artInfo } from './artList';

@Pipe({
	name : 'artlistbyartistFilter'
})

export class ArtlistbyartistFilterPipe implements PipeTransform{
	transform(value: artInfo[] , args : string[]) : artInfo[] {
		let filter : string = args[0] ? args[0].toLocaleLowerCase() : null;
		return filter  ? value.filter((actualpatients : artInfo) => actualpatients.artist_name.toLowerCase().indexOf(filter) != -1) : value ; 
	}	
}